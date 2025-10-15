import { RootState } from 'app/providers/StoreProvider/config/store';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<RootState> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as RootState)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};
        expect(getProfileError(state as RootState)).toEqual(undefined);
    });
});
