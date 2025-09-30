import { RefObject, useEffect, useMemo, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: RefObject<HTMLDivElement | null>;
    wrapperRef: RefObject<HTMLElement | null>;
}

export function useInfiniteScroll({
    callback,
    wrapperRef,
    triggerRef,
}: UseInfiniteScrollOptions) {
    const observer = useRef<IntersectionObserver | null>(null);

    const options = useMemo<IntersectionObserverInit>(
        () => ({
            root: wrapperRef.current,
            rootMargin: '0px',
            threshold: 1.0,
        }),
        [wrapperRef],
    );

    useEffect(() => {
        const triggerEl = triggerRef.current;

        if (!triggerEl) return;

        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                callback?.();
            }
        }, options);

        observer.current.observe(triggerEl);

        return () => {
            if (observer.current) {
                observer.current.unobserve(triggerEl);
                observer.current.disconnect();
                observer.current = null;
            }
        };
    }, [callback, options, triggerRef]);
}
