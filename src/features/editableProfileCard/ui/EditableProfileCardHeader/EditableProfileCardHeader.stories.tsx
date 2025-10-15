import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    // parameters: {
    //     router: {
    //         path: '/example/:id',
    //         initialEntries: ['/example/'],
    //     },
    // },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
