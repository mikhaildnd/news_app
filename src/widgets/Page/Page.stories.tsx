import { Page } from './Page';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Page> = {
    title: 'widgets/Page',
    component: Page,
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
