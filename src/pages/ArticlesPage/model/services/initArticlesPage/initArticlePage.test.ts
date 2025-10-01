import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageSliceActions } from '../../slice/articlesPageSlice';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    const baseState = {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view: ArticleView.BIG,
        error: undefined,
    };

    test('dispatch initState and fetchArticlesList if _inited=false', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: { ...baseState, _inited: false },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledWith(
            articlesPageSliceActions.initState(),
        );
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: { ...baseState, _inited: true },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).not.toHaveBeenCalledWith(
            articlesPageSliceActions.initState(),
        );
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
