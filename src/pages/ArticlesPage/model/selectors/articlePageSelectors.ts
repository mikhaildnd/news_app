import { RootState } from 'app/providers/StoreProvider/config/store';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: RootState) =>
    state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: RootState) =>
    state.articlesPage?.error;
export const getArticlesPageView = (state: RootState) =>
    state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageNum = (state: RootState) =>
    state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: RootState) =>
    state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: RootState) =>
    state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: RootState) =>
    state.articlesPage?._inited;
