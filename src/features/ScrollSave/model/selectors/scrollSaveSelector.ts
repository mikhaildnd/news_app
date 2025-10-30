import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

const getScrollPosition = (state: StateSchema) => state.scrollSave.scroll;
//
const getPath = (_: StateSchema, path: string) => path;
export const getScrollSaveByPath = createSelector(
    // Здесь createSelector принимает массив селекторов, и потом "result function" получает их значения в том же порядке:
    // scroll = getScrollPosition(state)
    // path = getPath(state)
    [getScrollPosition, getPath],
    (scroll, path) => scroll[path] || 0,
);
