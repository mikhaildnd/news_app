import { AvatarDropdown } from './AvatarDropdown';
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole, UserSchema } from '@/entities/User';
import Avatar from '@/shared/assets/tests/storybook.png';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
};
export default meta;

type Story = StoryObj<typeof meta>;

const createUser = (overrides?: Partial<UserSchema['authData']>) => ({
    _isMounted: true,
    authData: {
        id: '1',
        username: 'user',
        roles: [UserRole.USER],
        avatar: Avatar,
        ...overrides,
    },
});

export const UserRights: Story = {
    decorators: [StoreDecorator({ user: createUser() })],
};

export const AdminRights: Story = {
    decorators: [
        StoreDecorator({
            user: createUser({
                username: 'Admin',
                roles: [UserRole.ADMIN],
            }),
        }),
    ],
};
