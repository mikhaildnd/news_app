import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facere ipsum, iste iusto laboriosam obcaecati provident quia, reprehenderit tempore veniam vero, vitae! Harum laboriosam nam perspiciatis placeat quod repellendus rerum sequi! Ad adipisci animi aspernatur assumenda blanditiis commodi deleniti dolor dolores dolorum ducimus esse est explicabo facilis incidunt iure laborum natus optio quaerat quos recusandae, repellendus sunt veniam voluptatem. Ab adipisci aliquid autem beatae consectetur culpa, dignissimos, doloremque doloribus eaque eligendi excepturi fuga harum ipsa iste laudantium natus, nobis odit officia possimus quas ratione reiciendis reprehenderit sapiente sed sit suscipit tenetur vel veniam voluptates voluptatibus. Amet aperiam consequatur laboriosam nobis.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facere ipsum, iste iusto laboriosam obcaecati provident quia, reprehenderit tempore veniam vero, vitae! Harum laboriosam nam perspiciatis placeat quod repellendus rerum sequi! Ad adipisci animi aspernatur assumenda blanditiis commodi deleniti dolor dolores dolorum ducimus esse est explicabo facilis incidunt iure laborum natus optio quaerat quos recusandae, repellendus sunt veniam voluptatem. Ab adipisci aliquid autem beatae consectetur culpa, dignissimos, doloremque doloribus eaque eligendi excepturi fuga harum ipsa iste laudantium natus, nobis odit officia possimus quas ratione reiciendis reprehenderit sapiente sed sit suscipit tenetur vel veniam voluptates voluptatibus. Amet aperiam consequatur laboriosam nobis.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
