import {
    createEntityAdapter,
    createSlice,
    EntityId,
    PayloadAction,
} from '@reduxjs/toolkit';
import { ArticleDetailsRecommendationsSchema } from '../../model/types/ArticleDetailsRecommendationsSchema';
import { Article } from '@/entities/Article';
import { fetchArticlesRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { StateSchema } from '@/app/providers/StoreProvider';

// createEntityAdapter<T>() сам по себе уже умеет выводить selectId (оно по умолчанию ищет id).
// А если хочешь передать кастомный selectId, нужно явно указать generic для ключа EntityId
const recommendationsAdapter = createEntityAdapter<Article, EntityId>({
    selectId: (article) => article.id,
});

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendations',
    initialState:
        recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
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
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesRecommendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    // entity normalize
                    recommendationsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );
export const { reducer: articleDetailsPageRecommendationsReducer } =
    articleDetailsPageRecommendationsSlice;
