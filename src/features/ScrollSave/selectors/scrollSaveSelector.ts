import { RootState } from 'app/providers/StoreProvider/config/store';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollPosition = (state: RootState) =>
    state.scrollSaveSlice.scroll;
// selector принимает state и props(аргумент, который мы передаем сами при вызове селектора)
export const getPath = (_: RootState, path: string) => path;
export const getScrollSaveByPath = createSelector(
    // Здесь createSelector принимает массив селекторов, и потом "result function" получает их значения в том же порядке:
    // scroll = getScrollPosition(state)
    // path = getPath(state)
    [getScrollPosition, getPath],
    (scroll, path) => scroll[path] || 0,
);
