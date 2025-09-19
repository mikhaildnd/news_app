import { RootState } from 'app/providers/StoreProvider/config/store';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: RootStateDeepPartial = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as RootState)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: RootStateDeepPartial = {};
        expect(getLoginError(state as RootState)).toEqual(undefined);
    });
});
