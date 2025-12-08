import { useTranslation } from 'react-i18next';
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import cls from './SidebarItem.module.scss';
import type { SidebarItemType } from '../../model/types/sidebarType';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem(props: SidebarItemProps) {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={
                <AppLink
                    className={classNames(cls.itemRedesigned, {
                        [cls.collapsedRedesigned]: collapsed,
                    })}
                    to={item.path}
                    activeClassName={cls.active}
                >
                    <Icon Svg={item.Icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
                    className={classNames(cls.item, {
                        [cls.collapsed]: collapsed,
                    })}
                    theme={AppLinkTheme.INVERTED}
                    to={item.path}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
        />
    );
});
