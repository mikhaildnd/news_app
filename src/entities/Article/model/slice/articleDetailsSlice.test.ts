import { Article } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

// Без хелперов
describe('articleDetailsSlice (явные тесты)', () => {
    test('should handle fetchArticleById.pending', () => {
        const state: ArticleDetailsSchema = {
            isLoading: false,
            error: 'error',
            data: undefined,
        };

        const newState = articleDetailsReducer(state, fetchArticleById.pending('', '1'));

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

        const newState = articleDetailsReducer(state, fetchArticleById.fulfilled(article, '', '1'));

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

        const newState = articleDetailsReducer(state, fetchArticleById.rejected(null, '', '1', error));

        expect(newState).toEqual({
            isLoading: false,
            error,
            data: undefined,
        });
    });
});

// С хелперами
// const initialState: ArticleDetailsSchema = {
//     isLoading: false,
//     error: undefined,
//     data: undefined,
// };
//
// const getState = (partial: DeepPartial<ArticleDetailsSchema> = {}) => ({ ...initialState, ...partial } as ArticleDetailsSchema);
//
// const reduce = (state: DeepPartial<ArticleDetailsSchema>, action: any) => articleDetailsReducer(getState(state), action);
//
// describe('articleDetailsSlice.test', () => {
//     test('should handle fetchArticleById.pending', () => {
//         const newState = reduce(
//             { error: 'error', isLoading: false },
//             fetchArticleById.pending('', '1'),
//         );
//
//         expect(newState).toMatchObject({
//             isLoading: true,
//             error: undefined,
//         });
//     });
//
//     test('should handle fetchArticleById.fulfilled', () => {
//         const article: Article = { id: '1', title: 'Test article' } as Article;
//
//         const newState = reduce(
//             { isLoading: true },
//             fetchArticleById.fulfilled(article, '', '1'),
//         );
//
//         expect(newState).toMatchObject({
//             isLoading: false,
//             data: article,
//             error: undefined,
//         });
//     });
//
//     test('should handle fetchArticleById.rejected', () => {
//         const error = 'Ошибка загрузки';
//
//         const newState = reduce(
//             { isLoading: true },
//             fetchArticleById.rejected(null, '', '1', error),
//         );
//
//         expect(newState).toMatchObject({
//             isLoading: false,
//             error,
//             data: undefined,
//         });
//     });
// });

// Data-driven вариант
// const initialState: ArticleDetailsSchema = {
//     isLoading: false,
//     error: undefined,
//     data: undefined,
// };
//
// const getState = (partial: DeepPartial<ArticleDetailsSchema> = {}) =>
//     ({ ...initialState, ...partial } as ArticleDetailsSchema);
//
// const reduce = (state: DeepPartial<ArticleDetailsSchema>, action: any) =>
//     articleDetailsReducer(getState(state), action);
//
// describe('articleDetailsSlice (data-driven)', () => {
//     const article: Article = { id: '1', title: 'Test article' } as Article;
//     const error = 'Ошибка загрузки';
//
//     test.each([
//         {
//             name: 'pending',
//             action: fetchArticleById.pending('', '1'),
//             startState: { error: 'error', isLoading: false },
//             expected: { isLoading: true, error: undefined },
//         },
//         {
//             name: 'fulfilled',
//             action: fetchArticleById.fulfilled(article, '', '1'),
//             startState: { isLoading: true },
//             expected: { isLoading: false, data: article, error: undefined },
//         },
//         {
//             name: 'rejected',
//             action: fetchArticleById.rejected(null, '', '1', error),
//             startState: { isLoading: true },
//             expected: { isLoading: false, error, data: undefined },
//         },
//     ])('should handle fetchArticleById.%s', ({ action, startState, expected }) => {
//         const newState = reduce(startState, action);
//         expect(newState).toMatchObject(expected);
//     });
// });

// Гибридный стиль. Если поменяется структура редьюсера, правим только cases
// const initialState: ArticleDetailsSchema = {
//     isLoading: false,
//     error: undefined,
//     data: undefined,
// };
//
// const getState = (partial: DeepPartial<ArticleDetailsSchema> = {}) =>
//     ({ ...initialState, ...partial } as ArticleDetailsSchema);
//
// const reduce = (state: DeepPartial<ArticleDetailsSchema>, action: any) =>
//     articleDetailsReducer(getState(state), action);
//
// describe('articleDetailsSlice (гибрид)', () => {
//     const article: Article = { id: '1', title: 'Test article' } as Article;
//     const error = 'Ошибка загрузки';
//
//     const cases = {
//         pending: {
//             action: fetchArticleById.pending('', '1'),
//             startState: { error: 'error', isLoading: false },
//             expected: { isLoading: true, error: undefined },
//         },
//         fulfilled: {
//             action: fetchArticleById.fulfilled(article, '', '1'),
//             startState: { isLoading: true },
//             expected: { isLoading: false, data: article, error: undefined },
//         },
//         rejected: {
//             action: fetchArticleById.rejected(null, '', '1', error),
//             startState: { isLoading: true },
//             expected: { isLoading: false, error, data: undefined },
//         },
//     };
//
//     test('should handle fetchArticleById.pending', () => {
//         const { action, startState, expected } = cases.pending;
//         const newState = reduce(startState, action);
//         expect(newState).toMatchObject(expected);
//     });
//
//     test('should handle fetchArticleById.fulfilled', () => {
//         const { action, startState, expected } = cases.fulfilled;
//         const newState = reduce(startState, action);
//         expect(newState).toMatchObject(expected);
//     });
//
//     test('should handle fetchArticleById.rejected', () => {
//         const { action, startState, expected } = cases.rejected;
//         const newState = reduce(startState, action);
//         expect(newState).toMatchObject(expected);
//     });
// });
