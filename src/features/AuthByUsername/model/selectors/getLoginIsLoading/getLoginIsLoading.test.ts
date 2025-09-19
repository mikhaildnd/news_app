import { getLoginIsLoading } from './getLoginIsLoading';
import { RootState } from 'app/providers/StoreProvider/config/store';

describe('getLoginIsLoading.test', () => {
    test('should return true', () => {
        const state: RootStateDeepPartial = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as RootState)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: RootStateDeepPartial = {};
        expect(getLoginIsLoading(state as RootState)).toEqual(false);
    });
});
