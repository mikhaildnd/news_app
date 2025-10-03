import { RootState } from 'app/providers/StoreProvider/config/store';

export const getArticleRecommendationsIsLoading = (state: RootState) =>
    state.articleDetailsPageRecommendations?.isLoading || false;
export const getArticleRecommendationsError = (state: RootState) =>
    state.articleDetailsPageRecommendations?.error;
