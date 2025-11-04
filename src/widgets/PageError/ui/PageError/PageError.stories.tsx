import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const LightStory: Story = {
    args: {},
};

export const DarkStory: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
