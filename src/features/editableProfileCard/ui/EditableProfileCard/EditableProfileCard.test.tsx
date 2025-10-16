import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';

import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin213',
};

const options = {
    initialState: {
        profile: {
            data: profile,
            readonly: true,
            form: profile,
            isLoading: false,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
            _isMounted: false,
        },
    },
};

describe('features/EditableProfileCard', () => {
    test('readonly mode should switch over', () => {
        componentRender(<EditableProfileCard id="1" />, options);
        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('when canceling, the values should be reset', () => {
        componentRender(<EditableProfileCard id="1" />, options);
        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

        userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
        userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user');

        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin');
    });

    test('should be error', () => {
        componentRender(<EditableProfileCard id="1" />, options);
        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

        userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });
    // TODO: вернуть динамик модуль лоадер, без него не работает тест
});
