import { Card } from './Card';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <Text title={'Title'} text={'Text'} />,
    },
};
