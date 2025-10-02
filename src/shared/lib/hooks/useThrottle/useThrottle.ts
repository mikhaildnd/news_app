import { useCallback, useEffect, useRef } from 'react';

export function useThrottle<TArgs extends unknown[]>(
    callback: (...args: TArgs) => void,
    delay: number,
): (...args: TArgs) => void {
    const throttleRef = useRef(false);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return useCallback(
        (...args: TArgs) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                timerRef.current = window.setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}
