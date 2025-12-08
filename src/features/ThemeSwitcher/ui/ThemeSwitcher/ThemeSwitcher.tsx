import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg?react';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
// import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react'; //TODO: delete?
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { memo, useCallback } from 'react';
// import { Theme } from '@/shared/const/theme'; //TODO: delete?
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            void dispatch(
                saveJsonSettings({
                    theme: newTheme,
                }),
            );
        });
    }, [dispatch, toggleTheme]);

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
            off={
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    <IconDeprecated
                        Svg={ThemeIconDeprecated}
                        width={40}
                        height={40}
                        inverted
                    />
                </Button>
            }
        />
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
