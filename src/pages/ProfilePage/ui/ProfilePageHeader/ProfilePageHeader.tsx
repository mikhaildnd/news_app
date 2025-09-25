import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';
import {
    cancelEdit,
    setReadonly,
} from 'entities/Profile/model/slice/profileSlice';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        void dispatch(updateProfileData()); //void убрать мб?
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly ? (
                        <Button
                            onClick={onEdit}
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={onCancelEdit}
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                onClick={onSave}
                                className={cls.saveBtn}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Сохранить')}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
