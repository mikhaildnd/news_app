import { RatingCard } from './RatingCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RatingCard> = {
    title: '_/RatingCard',
    component: RatingCard,
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
