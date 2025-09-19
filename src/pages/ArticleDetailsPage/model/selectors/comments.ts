// import { StateSchema } from 'app/providers/StoreProvider';

import { RootState } from 'app/providers/StoreProvider/config/store';

export const getArticleCommentsIsLoading = (state: RootState) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: RootState) => state.articleDetailsComments?.error;
