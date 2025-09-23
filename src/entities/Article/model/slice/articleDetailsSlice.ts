import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { Article } from '../types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { rootReducer } from 'app/providers/StoreProvider';
// import { loginSlice } from 'features/AuthByUsername/model/slice/loginSlice';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined; // обнуляем ошибку, если есть
                state.isLoading = true;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const articleDetailsReducer = articleDetailsSlice.reducer;
export const articleDetailsActions = articleDetailsSlice.actions;
export const injectArticleDetailsSlice =
    articleDetailsSlice.injectInto(rootReducer);

declare module 'app/providers/StoreProvider/config/store' {
    interface LazyLoadedSlices extends WithSlice<typeof articleDetailsSlice> {}
}
