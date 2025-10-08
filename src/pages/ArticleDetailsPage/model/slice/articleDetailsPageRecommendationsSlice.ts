import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
    WithSlice,
} from '@reduxjs/toolkit';
import { rootReducer } from 'app/providers/StoreProvider';
import { ArticleDetailsRecommendationsSchema } from '../../model/types/ArticleDetailsRecommendationsSchema';
import { Article } from 'entities/Article';
import { fetchArticlesRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

// createEntityAdapter<T>() сам по себе уже умеет выводить selectId (оно по умолчанию ищет id).
// А если хочешь передать кастомный selectId, нужно явно указать generic для ключа EntityId
const recommendationsAdapter = createEntityAdapter<Article>();
//     {
//     selectId: (article: Article) => article.id
// }

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

export const injectedArticleDetailsPageRecommendationsSlice =
    articleDetailsPageRecommendationsSlice.injectInto(rootReducer);
export const getArticleRecommendations = recommendationsAdapter.getSelectors(
    (state: ReturnType<typeof rootReducer>) =>
        injectedArticleDetailsPageRecommendationsSlice.selectSlice(state) ??
        recommendationsAdapter.getInitialState(),
);
export const articleDetailsPageRecommendationsReducer =
    articleDetailsPageRecommendationsSlice.reducer;

declare module 'app/providers/StoreProvider/config/store' {
    interface LazyLoadedSlices
        extends WithSlice<typeof articleDetailsPageRecommendationsSlice> {}
}
