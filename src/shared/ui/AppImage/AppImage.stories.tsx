import { AppImage } from './AppImage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppImage> = {
    title: '_/AppImage',
    component: AppImage,
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
