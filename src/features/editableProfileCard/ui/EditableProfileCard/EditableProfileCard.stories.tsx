import { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    args: {},
    // decorators: [
    //     (Story) => (
    //         <div style={{ padding: 100 }}>
    //             <Story />
    //         </div>
    //     ),
    // ],
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
};
