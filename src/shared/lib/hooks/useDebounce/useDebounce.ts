import { useCallback, useEffect, useRef } from 'react';

export function useDebounce<TArgs extends unknown[]>(
    callback: (...args: TArgs) => void,
    delay: number,
): (...args: TArgs) => void {
    // Поддержка и Node.js, и браузера
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return useCallback(
        (...args: TArgs) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}

// import { useCallback, useRef } from 'react';
//
// export function useDebounce<TArgs extends unknown[]>(
//     callback: (...args: TArgs) => void,
//     delay: number,
// ) {
//     // В браузере setTimeout возвращает number, в Node.js — Timeout
//     // Чтобы кроссплатформенно: ReturnType<typeof setTimeout>
//     const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
//
//     return useCallback(
//         (...args: TArgs) => {
//             if (timer.current) {
//                 clearTimeout(timer.current);
//             }
//             timer.current = setTimeout(() => {
//                 callback(...args);
//             }, delay);
//         },
//         [callback, delay],
//     );
// }
