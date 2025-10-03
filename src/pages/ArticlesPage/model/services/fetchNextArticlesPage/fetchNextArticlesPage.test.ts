import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { ArticleType, ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    const baseState: ArticlesPageSchema = {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view: ArticleView.BIG,
        error: undefined,
        _inited: true,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
    };

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: baseState,
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4); // pending, fulfilled, 2 dispatch
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });

    test('fetchArticleList not called if hasMore=false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: { ...baseState, hasMore: false },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchArticleList not called if isLoading=true', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: { ...baseState, isLoading: true },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
