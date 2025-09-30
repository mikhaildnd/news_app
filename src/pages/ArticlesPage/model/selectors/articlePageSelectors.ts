import { RootState } from 'app/providers/StoreProvider/config/store';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: RootState) =>
    state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: RootState) =>
    state.articlesPage?.error;
export const getArticlesPageView = (state: RootState) =>
    state.articlesPage?.view || ArticleView.SMALL;
