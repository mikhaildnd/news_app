import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { ArticleType, ArticleView, ArticleSortField } from 'entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import type { ArticlesPageSchema } from '../../types/articlesPageSchema';

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
            articlesPageActions.initState(),
        );

        expect(fetchArticlesList).toHaveBeenCalledWith({});
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: { ...baseState, _inited: true },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).not.toHaveBeenCalledWith(
            articlesPageActions.initState(),
        );
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
