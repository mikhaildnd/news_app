import { scrollSaveActions, scrollSaveReducer } from './scrollSaveSlice';
import type { ScrollSaveSchema } from '../types/scrollSaveSchema';

describe('ScrollSaveSliceSlice', () => {
    test('should return initialState', () => {
        expect(
            scrollSaveReducer(undefined, { type: '' }),
        ).toEqual<ScrollSaveSchema>({ scroll: {} });
    });

    test('should set scroll position', () => {
        const state: ScrollSaveSchema = { scroll: {} };

        const action = scrollSaveActions.setScrollPosition({
            path: '/articles',
            position: 150,
        });

        const newState = scrollSaveReducer(state, action);

        expect(newState.scroll['/articles']).toBe(150);
    });

    test('should rewrite position scroll position if path exists ', () => {
        const state: ScrollSaveSchema = { scroll: { '/articles': 100 } };

        const action = scrollSaveActions.setScrollPosition({
            path: '/articles',
            position: 300,
        });

        const newState = scrollSaveReducer(state, action);

        expect(newState.scroll['/articles']).toBe(300);
    });

    test('should work with multiple paths', () => {
        const state: ScrollSaveSchema = { scroll: {} };

        const firstAction = scrollSaveActions.setScrollPosition({
            path: '/articles',
            position: 200,
        });
        const stateAfterFirst = scrollSaveReducer(state, firstAction);

        const secondAction = scrollSaveActions.setScrollPosition({
            path: '/profile',
            position: 400,
        });
        const finalState = scrollSaveReducer(stateAfterFirst, secondAction);

        expect(finalState.scroll['/articles']).toBe(200);
        expect(finalState.scroll['/profile']).toBe(400);
    });
});
