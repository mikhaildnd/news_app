import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Description',
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Description',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Description',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
    args: {
        title: 'Title',
        text: 'Description',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Description',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'Description',
        size: TextSize.L,
    },
};

// export default {
//     title: 'shared/Text',
//     component: Text,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof Text>;
//
// const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//     title: 'Title',
//     text: 'Description',
// };
//
// export const Error = Template.bind({});
// Error.args = {
//     title: 'Title',
//     text: 'Description',
//     theme: TextTheme.ERROR,
// };
//
// export const onlyTitle = Template.bind({});
// onlyTitle.args = {
//     title: 'Title',
// };
//
// export const onlyText = Template.bind({});
// onlyText.args = {
//     text: 'Description',
// };
//
// export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
//     title: 'Title',
//     text: 'Description',
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const onlyTitleDark = Template.bind({});
// onlyTitleDark.args = {
//     title: 'Title',
// };
// onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const onlyTextDark = Template.bind({});
// onlyTextDark.args = {
//     text: 'Description',
// };
// onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const SizeL = Template.bind({});
// SizeL.args = {
//     title: 'Title',
//     text: 'Description',
//     size: TextSize.L,
// };
