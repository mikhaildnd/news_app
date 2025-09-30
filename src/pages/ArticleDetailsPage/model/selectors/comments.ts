import { RootState } from 'app/providers/StoreProvider/config/store';

export const getArticleCommentsIsLoading = (state: RootState) =>
    state.articleDetailsComments?.isLoading || false;
export const getArticleCommentsError = (state: RootState) =>
    state.articleDetailsComments?.error;
