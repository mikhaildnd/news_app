import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSaveSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const scrollSaveSliceActions = scrollSaveSlice.actions;
export const scrollSaveSliceReducer = scrollSaveSlice.reducer;
