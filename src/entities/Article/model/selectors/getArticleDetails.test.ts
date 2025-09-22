import { RootState } from 'app/providers/StoreProvider/config/store';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './getArticleDetails';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<RootState> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as RootState)).toEqual(data);
    });

    test('should work with empty state data', () => {
        const state: DeepPartial<RootState> = {};
        expect(getArticleDetailsData(state as RootState)).toEqual(undefined);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<RootState> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as RootState)).toEqual(true);
    });

    test('should work with empty state isLoading', () => {
        const state: DeepPartial<RootState> = {};
        expect(getArticleDetailsIsLoading(state as RootState)).toEqual(false);
    });

    test('should return error', () => {
        const state: DeepPartial<RootState> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as RootState)).toEqual('error');
    });

    test('should work with empty state error', () => {
        const state: DeepPartial<RootState> = {};
        expect(getArticleDetailsError(state as RootState)).toEqual(undefined);
    });
});
