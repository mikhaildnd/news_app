import { Article } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice (явные тесты)', () => {
    test('should handle fetchArticleById.pending', () => {
        const state: ArticleDetailsSchema = {
            isLoading: false,
            error: 'error',
            data: undefined,
        };

        const newState = articleDetailsReducer(
            state,
            fetchArticleById.pending('', '1'),
        );

        expect(newState).toEqual({
            isLoading: true,
            error: undefined,
            data: undefined,
        });
    });

    test('should handle fetchArticleById.fulfilled', () => {
        const article: Article = { id: '1', title: 'Test article' } as Article;

        const state: ArticleDetailsSchema = {
            isLoading: true,
            error: undefined,
            data: undefined,
        };

        const newState = articleDetailsReducer(
            state,
            fetchArticleById.fulfilled(article, '', '1'),
        );

        expect(newState).toEqual({
            isLoading: false,
            error: undefined,
            data: article,
        });
    });

    test('should handle fetchArticleById.rejected', () => {
        const error = 'Ошибка загрузки';

        const state: ArticleDetailsSchema = {
            isLoading: true,
            error: undefined,
            data: undefined,
        };

        const newState = articleDetailsReducer(
            state,
            fetchArticleById.rejected(null, '', '1', error),
        );

        expect(newState).toEqual({
            isLoading: false,
            error,
            data: undefined,
        });
    });
});
