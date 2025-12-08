import { NotificationButton } from './NotificationButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
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
