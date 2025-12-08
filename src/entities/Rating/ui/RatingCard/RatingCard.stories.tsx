import { RatingCard } from './RatingCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
