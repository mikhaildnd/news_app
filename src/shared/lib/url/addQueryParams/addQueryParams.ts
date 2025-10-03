export function getQueryParams(
    params: Record<string, string | undefined>,
): string {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            searchParams.set(key, value);
        }
    });

    return `?${searchParams.toString()}`;
}

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */

export function addQueryParams(
    params: Record<string, string | undefined>,
): void {
    const newUrl = getQueryParams(params);
    window.history.pushState(null, '', newUrl);
}
