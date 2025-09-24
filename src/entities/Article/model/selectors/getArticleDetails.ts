import { RootState } from 'app/providers/StoreProvider/config/store';
import { injectArticleDetailsSlice } from 'entities/Article/model/slice/articleDetailsSlice'; //fix?

export const getArticleDetailsData = (state: RootState) =>
    injectArticleDetailsSlice.selectSlice(state)?.data;
export const getArticleDetailsIsLoading = (state: RootState) =>
    injectArticleDetailsSlice.selectSlice(state)?.isLoading || false;
export const getArticleDetailsError = (state: RootState) =>
    injectArticleDetailsSlice.selectSlice(state)?.error;
