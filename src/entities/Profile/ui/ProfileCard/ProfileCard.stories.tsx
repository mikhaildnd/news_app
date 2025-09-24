import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            firstname: 'Mikhail',
            lastname: 'Dundukov',
            age: 33,
            currency: Currency.KZT,
            city: 'Almaty',
            country: Country.Kazakhstan,
            avatar,
        },
    },
};

export const WithError: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
