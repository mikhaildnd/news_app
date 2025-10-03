import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { ArticleType, ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageSliceActions } from '../../slice/articlesPageSlice';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';
import { ArticleSortField } from 'entities/Article/model/types/article';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    const baseState: ArticlesPageSchema = {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view: ArticleView.BIG,
        error: undefined,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        _inited: false,
        type: ArticleType.ALL,
    };

    test('dispatch initState and fetchArticlesList if _inited=false', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: { ...baseState, _inited: false },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toHaveBeenCalledWith(
            articlesPageSliceActions.initState(),
        );

        expect(fetchArticlesList).toHaveBeenCalledWith({});
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: { ...baseState, _inited: true },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).not.toHaveBeenCalledWith(
            articlesPageSliceActions.initState(),
        );
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
