import { getLoginPassword } from './getLoginPassword';
import { RootState } from 'app/providers/StoreProvider/config/store';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: DeepPartial<RootState> = {
            login: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as RootState)).toEqual('password');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};
        expect(getLoginPassword(state as RootState)).toEqual('');
    });
});
