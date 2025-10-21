import {
    createEntityAdapter,
    createSlice,
    EntityId,
    PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { StateSchema } from 'app/providers/StoreProvider';

// createEntityAdapter<T>() сам по себе уже умеет выводить selectId (оно по умолчанию ищет id).
// А если хочешь передать кастомный selectId, нужно явно указать generic для ключа EntityId
const commentsAdapter = createEntityAdapter<Comment, EntityId>({
    selectId: (comment) => comment.id,
});

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

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);
export const { reducer: articleDetailsCommentsReducer } =
    articleDetailsCommentsSlice;
