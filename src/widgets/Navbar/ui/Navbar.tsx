import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

export const Navbar = (): JSX.Element => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

