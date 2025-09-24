import { RootState } from 'app/providers/StoreProvider/config/store';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<RootState> = {
            login: {
                error: 'error',
            },
        };
        expect(getLoginError(state as RootState)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};
        expect(getLoginError(state as RootState)).toEqual(undefined);
    });
});
