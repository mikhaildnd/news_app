import { getLoginPassword } from './getLoginPassword';
import { RootState } from 'app/providers/StoreProvider/config/store';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: RootStateDeepPartial = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as RootState)).toEqual('password');
    });

    test('should work with empty state', () => {
        const state: RootStateDeepPartial = {};
        expect(getLoginPassword(state as RootState)).toEqual('');
    });
});

//RootStateDeepPartial
