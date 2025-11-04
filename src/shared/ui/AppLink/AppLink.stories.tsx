import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Inverted: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.INVERTED,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedDark: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
