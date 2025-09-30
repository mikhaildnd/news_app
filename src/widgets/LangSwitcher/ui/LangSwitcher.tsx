import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(function LangSwitcher(
    props: LangSwitcherProps,
) {
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
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={() => void toggle()}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
