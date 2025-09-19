import { RootState } from 'app/providers/StoreProvider/config/store';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.png';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            firstname: 'Mikhail',
            lastname: 'Dundukov',
            age: 33,
            currency: Currency.KZT,
            city: 'Almaty',
            country: Country.Kazakhstan,
            // Можно просто передать строку, нет особого смысла импортировать изображение
            // avatar: 'avatar.png'
            avatar,
        };

        const state: RootStateDeepPartial = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as RootState)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: RootStateDeepPartial = {};
        expect(getProfileData(state as RootState)).toEqual(undefined);
    });
});
