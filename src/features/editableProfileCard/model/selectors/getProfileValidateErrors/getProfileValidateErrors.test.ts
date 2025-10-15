import { getProfileValidateErrors } from './getProfileValidateErrors';
import { RootState } from 'app/providers/StoreProvider/config/store';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<RootState> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as RootState)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};
        expect(getProfileValidateErrors(state as RootState)).toEqual(undefined);
    });
});
