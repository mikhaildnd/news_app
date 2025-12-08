import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
};
export default meta;

type Story = StoryObj<typeof meta>;

const primaryArgs = {
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
};

export const Primary: Story = {
    args: primaryArgs,
};

export const PrimaryRedesigned: Story = {
    args: primaryArgs,
    decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
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
