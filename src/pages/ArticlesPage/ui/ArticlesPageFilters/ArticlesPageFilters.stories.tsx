import { ArticlesPageFilters } from './ArticlesPageFilters';
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        router: {
            path: '/articles',
            initialEntries: ['/articles'],
        },
    },
};
export default meta;

type Story = StoryObj<typeof meta>;

const baseState: ArticlesPageSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 4,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: ArticleType.ALL,
};

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articlesPage: baseState,
        }),
    ],
};
