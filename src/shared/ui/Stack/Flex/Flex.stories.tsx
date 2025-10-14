import { Flex } from './Flex';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const RowGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const ColumnGap4: Story = {
    args: {
        gap: '4',
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const ColumnGap8: Story = {
    args: {
        gap: '8',
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const ColumnGap32: Story = {
    args: {
        gap: '32',
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
};
