import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency/model/types/currency';
import { Country } from '@/entities/Country/model/types/country';
import ProfilePage from './ProfilePage';

const initialData = {
    profile: {
        data: {
            username: 'admin',
            firstname: 'Mikhail',
            lastname: 'Dundukov',
            age: 33,
            country: Country.Kazakhstan,
            city: 'Almaty',
            currency: Currency.KZT,
        },
        form: {
            username: 'admin',
            firstname: 'Mikhail',
            lastname: 'Dundukov',
            age: 33,
            country: Country.Kazakhstan,
            city: 'Almaty',
            currency: Currency.KZT,
        },
        isLoading: false,
        readonly: true,
    },
};

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage/ProfilePage',
    component: ProfilePage,
    parameters: {
        router: {
            path: '/profile/:id',
            initialEntries: ['/profile/1'],
        },
    },
    decorators: [StoreDecorator(initialData)],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
