import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentFormTypes';
import { rootReducer } from 'app/providers/StoreProvider';

const initialState: AddCommentFormSchema = {};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined; // обнуляем ошибку, если есть
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

declare module 'app/providers/StoreProvider/config/store' {
    interface LazyLoadedSlices extends WithSlice<typeof addCommentFormSlice> {}
}

export const injectedAddCommentFormSlice =
    addCommentFormSlice.injectInto(rootReducer);

export const { setText } = addCommentFormSlice.actions;
export const addCommentFormReducer = addCommentFormSlice.reducer;
