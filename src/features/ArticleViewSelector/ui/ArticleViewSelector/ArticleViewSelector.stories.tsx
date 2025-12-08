import { ArticleViewSelector } from './ArticleViewSelector';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
