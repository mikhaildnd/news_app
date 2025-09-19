import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    firstname: 'Mikhail',
                    lastname: 'Dundukov',
                    age: 33,
                    country: Country.Kazakhstan,
                    city: 'Almaty',
                    currency: Currency.KZT,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    firstname: 'Mikhail',
                    lastname: 'Dundukov',
                    age: 33,
                    country: Country.Kazakhstan,
                    city: 'Almaty',
                    currency: Currency.KZT,
                },
            },
        }),
    ],
};
