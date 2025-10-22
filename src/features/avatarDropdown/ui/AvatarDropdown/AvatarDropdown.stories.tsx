import { AvatarDropdown } from './AvatarDropdown';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AvatarDropdown> = {
    title: '_/AvatarDropdown',
    component: AvatarDropdown,
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
