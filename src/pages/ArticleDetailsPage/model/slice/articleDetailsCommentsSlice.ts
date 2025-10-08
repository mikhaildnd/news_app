import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
    WithSlice,
} from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { rootReducer } from 'app/providers/StoreProvider';

// createEntityAdapter<T>() сам по себе уже умеет выводить selectId (оно по умолчанию ищет id).
// А если хочешь передать кастомный selectId, нужно явно указать generic для ключа EntityId
const commentsAdapter = createEntityAdapter<Comment>();

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        },
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    // entity normalize
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const injectedArticleDetailsCommentsSlice =
    articleDetailsCommentsSlice.injectInto(rootReducer);
export const getArticleDetailsComments = commentsAdapter.getSelectors(
    (state: ReturnType<typeof rootReducer>) =>
        injectedArticleDetailsCommentsSlice.selectSlice(state) ??
        commentsAdapter.getInitialState(),
);
export const articleDetailsCommentsReducer =
    articleDetailsCommentsSlice.reducer;

declare module 'app/providers/StoreProvider/config/store' {
    interface LazyLoadedSlices
        extends WithSlice<typeof articleDetailsCommentsSlice> {}
}
