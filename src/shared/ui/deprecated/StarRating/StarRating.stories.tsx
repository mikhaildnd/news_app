import { StarRating } from './StarRating';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
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
