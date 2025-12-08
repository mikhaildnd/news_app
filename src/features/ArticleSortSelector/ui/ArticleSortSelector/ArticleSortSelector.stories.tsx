import { ArticleSortSelector } from './ArticleSortSelector';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
