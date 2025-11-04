import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileReducer, profileActions } from './profileSlice';
import type { ProfileSchema } from '../types/editableProfileCardSchema';
import { ValidateProfileError } from '../../model/consts/consts';

const data = {
    username: 'admin',
    firstname: 'Mikhail',
    lastname: 'Dundukov',
    age: 33,
    currency: Currency.KZT,
    city: 'Almaty',
    country: Country.Kazakhstan,
    avatar: 'avatar.png',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: 'admin',
                }),
            ),
        ).toEqual({
            form: { username: 'admin' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        // изучить { type: updateProfileData.pending.type }
        expect(
            profileReducer(state as ProfileSchema, {
                type: updateProfileData.pending.type,
            }),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
