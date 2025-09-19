import { RootState } from 'app/providers/StoreProvider/config/store';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should work with filled state', () => {
        const state: RootStateDeepPartial = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as RootState)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: RootStateDeepPartial = {};
        expect(getProfileIsLoading(state as RootState)).toEqual(undefined);
    });
});
