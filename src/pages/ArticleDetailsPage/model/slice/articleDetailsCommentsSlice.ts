import { createEntityAdapter, createSlice, EntityId, PayloadAction, WithSlice } from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
// import { StateSchema } from 'app/providers/StoreProvider';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { Article } from 'entities/Article';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { rootReducer } from 'app/providers/StoreProvider';
import { loginSlice } from 'features/AuthByUsername/model/slice/loginSlice';

// createEntityAdapter<T>() сам по себе уже умеет выводить selectId (оно по умолчанию ищет id).
// А если хочешь передать кастомный selectId, нужно явно указать generic для ключа EntityId
const commentsAdapter = createEntityAdapter<Comment>();

// const commentsAdapter = createEntityAdapter<Comment, EntityId>({
//     selectId: (comment: Comment) => comment.id,
// });

// export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
//     (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
// );

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                // entity normalize
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const injectedArticleDetailsCommentsSlice = articleDetailsCommentsSlice.injectInto(rootReducer);
export const articleDetailsCommentsSelectors = commentsAdapter.getSelectors(
    (state: ReturnType<typeof rootReducer>) =>
        injectedArticleDetailsCommentsSlice.selectSlice(state) ?? commentsAdapter.getInitialState(),
);
export const articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;

declare module 'app/providers/StoreProvider/config/store' {
    interface LazyLoadedSlices extends WithSlice<typeof articleDetailsCommentsSlice> {}
}
