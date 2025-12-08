import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ForbiddenPage from './ForbiddenPage';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
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
