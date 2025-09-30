import { getLoginUsername } from './getLoginUsername';
import { RootState } from 'app/providers/StoreProvider/config/store';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: DeepPartial<RootState> = {
            login: {
                username: 'Admin',
            },
        };
        expect(getLoginUsername(state as RootState)).toEqual('Admin');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};
        expect(getLoginUsername(state as RootState)).toEqual('');
    });
});
