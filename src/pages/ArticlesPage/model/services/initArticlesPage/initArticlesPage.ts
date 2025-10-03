import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageSliceActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlePageSelectors';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlePage/initArticlesPage', (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (inited) return;

    // const paramConfig: Record<
    //     string,
    //     (
    //         value: string,
    //     ) => ReturnType<
    //         (typeof articlesPageSliceActions)[keyof typeof articlesPageSliceActions]
    //     >
    // > = {
    //     order: (value) => articlesPageSliceActions.setOrder(value as SortOrder),
    //     sort: (value) =>
    //         articlesPageSliceActions.setSort(value as ArticleSortField),
    //     search: (value) => articlesPageSliceActions.setSearch(value),
    // };
    //
    // Object.entries(paramConfig).forEach(([key, actionCreator]) => {
    //     const value = searchParams.get(key);
    //     if (value) {
    //         dispatch(actionCreator(value));
    //     }
    // });

    const orderFromUrl = searchParams.get('order') as SortOrder;
    const sortFromUrl = searchParams.get('sort') as ArticleSortField;
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type') as ArticleType;

    if (orderFromUrl) {
        dispatch(articlesPageSliceActions.setOrder(orderFromUrl));
    }
    if (sortFromUrl) {
        dispatch(articlesPageSliceActions.setSort(sortFromUrl));
    }
    if (searchFromUrl) {
        dispatch(articlesPageSliceActions.setSearch(searchFromUrl));
    }
    if (typeFromUrl) {
        dispatch(articlesPageSliceActions.setType(typeFromUrl));
    }

    dispatch(articlesPageSliceActions.initState());
    void dispatch(fetchArticlesList({}));
});
