import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { RootState } from 'app/providers/StoreProvider/config/store';

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const state: RootStateDeepPartial = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE],
            },
        };
        expect(getProfileValidateErrors(state as RootState)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('should work with empty state', () => {
        const state: RootStateDeepPartial = {};
        expect(getProfileValidateErrors(state as RootState)).toEqual(undefined);
    });
});
