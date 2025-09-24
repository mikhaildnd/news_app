import { getLoginIsLoading } from './getLoginIsLoading';
import { RootState } from 'app/providers/StoreProvider/config/store';

describe('getLoginIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<RootState> = {
            login: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as RootState)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};
        expect(getLoginIsLoading(state as RootState)).toEqual(false);
    });
});
