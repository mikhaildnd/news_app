import { getLoginUsername } from './getLoginUsername';
import { RootState } from 'app/providers/StoreProvider/config/store';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        // RootStateDeepPartial?
        const state: RootStateDeepPartial = {
            loginForm: {
                username: 'Admin',
            },
        };
        expect(getLoginUsername(state as RootState)).toEqual('Admin');
    });

    test('should work with empty state', () => {
        const state: RootStateDeepPartial = {}; // RootStateDeepPartial?
        expect(getLoginUsername(state as RootState)).toEqual('');
    });
});
