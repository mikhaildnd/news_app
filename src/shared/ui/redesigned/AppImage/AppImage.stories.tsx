import { AppImage } from './AppImage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppImage> = {
    title: 'shared/AppImage',
    component: AppImage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
