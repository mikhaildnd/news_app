import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageSliceActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlePageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlePage/initArticlesPage', (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState()); //useSelector тут нельзя вызывать как в компоненте

    if (!inited) {
        dispatch(articlesPageSliceActions.initState());
        void dispatch(
            fetchArticlesList({
                page: 1,
            }),
        );
    }
});
