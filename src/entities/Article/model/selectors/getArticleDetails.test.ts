import { RootState } from 'app/providers/StoreProvider/config/store';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './getArticleDetails';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: RootStateDeepPartial = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as RootState)).toEqual(data);
    });

    test('should work with empty state data', () => {
        const state: RootStateDeepPartial = {};
        expect(getArticleDetailsData(state as RootState)).toEqual(undefined);
    });

    test('should return isLoading', () => {
        const state: RootStateDeepPartial = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as RootState)).toEqual(true);
    });

    test('should work with empty state isLoading', () => {
        const state: RootStateDeepPartial = {};
        expect(getArticleDetailsIsLoading(state as RootState)).toEqual(false);
    });

    test('should return error', () => {
        const state: RootStateDeepPartial = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as RootState)).toEqual('error');
    });

    test('should work with empty state error', () => {
        const state: RootStateDeepPartial = {};
        expect(getArticleDetailsError(state as RootState)).toEqual(undefined);
    });
});
