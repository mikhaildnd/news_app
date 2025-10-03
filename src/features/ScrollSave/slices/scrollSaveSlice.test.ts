import {
    scrollSaveSliceActions,
    scrollSaveSliceReducer,
} from './scrollSaveSlice';
import { ScrollSaveSchema } from '../types/scrollSaveSchema';

describe('ScrollSaveSliceSlice', () => {
    test('should return initialState', () => {
        expect(
            scrollSaveSliceReducer(undefined, { type: '' }),
        ).toEqual<ScrollSaveSchema>({ scroll: {} });
    });

    test('should set scroll position', () => {
        const state: ScrollSaveSchema = { scroll: {} };

        const action = scrollSaveSliceActions.setScrollPosition({
            path: '/articles',
            position: 150,
        });

        const newState = scrollSaveSliceReducer(state, action);

        expect(newState.scroll['/articles']).toBe(150);
    });

    test('should rewrite position scroll position if path exists ', () => {
        const state: ScrollSaveSchema = { scroll: { '/articles': 100 } };

        const action = scrollSaveSliceActions.setScrollPosition({
            path: '/articles',
            position: 300,
        });

        const newState = scrollSaveSliceReducer(state, action);

        expect(newState.scroll['/articles']).toBe(300);
    });

    test('should work with multiple paths', () => {
        const state: ScrollSaveSchema = { scroll: {} };

        const firstAction = scrollSaveSliceActions.setScrollPosition({
            path: '/articles',
            position: 200,
        });
        const stateAfterFirst = scrollSaveSliceReducer(state, firstAction);

        const secondAction = scrollSaveSliceActions.setScrollPosition({
            path: '/profile',
            position: 400,
        });
        const finalState = scrollSaveSliceReducer(
            stateAfterFirst,
            secondAction,
        );

        expect(finalState.scroll['/articles']).toBe(200);
        expect(finalState.scroll['/profile']).toBe(400);
    });
});
