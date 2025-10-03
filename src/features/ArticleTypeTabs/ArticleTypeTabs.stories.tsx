import { ArticleTypeTabs } from './ArticleTypeTabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'features/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
    parameters: {
        router: {
            path: '/example/:id',
            initialEntries: ['/example/'],
        },
    },
};
