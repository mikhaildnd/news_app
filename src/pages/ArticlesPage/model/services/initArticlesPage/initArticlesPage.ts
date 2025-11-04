import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlePageSelectors';
import type { SortOrder } from '@/shared/types';
import type { ArticleSortField, ArticleType } from '@/entities/Article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlePage/initArticlesPage', (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (inited) return;

    const orderFromUrl = searchParams.get('order') as SortOrder;
    const sortFromUrl = searchParams.get('sort') as ArticleSortField;
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type') as ArticleType;

    if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl));
    }
    if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl));
    }
    if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
    }
    if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl));
    }

    dispatch(articlesPageActions.initState());
    void dispatch(fetchArticlesList({}));
});
