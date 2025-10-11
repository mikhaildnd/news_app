import { ListBox } from './ListBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
    // parameters: {
    //     router: {
    //         path: '/example/:id',
    //         initialEntries: ['/example/'],
    //     },
    // },
};
