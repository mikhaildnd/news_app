import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
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
