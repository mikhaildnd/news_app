import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        try {
            await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        } catch (e) {
            console.error('Ошибка при переключении языка', e);
        }
    };

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={
                <Button variant="clear">
                    {t(short ? 'Короткий язык' : 'Язык')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.CLEAR}
                    onClick={() => void toggle()}
                >
                    {t(short ? 'Короткий язык' : 'Язык')}
                </ButtonDeprecated>
            }
        />
    );
});

LangSwitcher.displayName = 'LangSwitcher';
