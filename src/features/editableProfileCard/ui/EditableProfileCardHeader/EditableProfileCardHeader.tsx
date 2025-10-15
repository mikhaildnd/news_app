import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { cancelEdit, setReadonly } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;
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
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Text title={t('Профиль')} />
                {canEdit && (
                    <>
                        {readonly ? (
                            <Button
                                onClick={onEdit}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    onClick={onCancelEdit}
                                    theme={ButtonTheme.OUTLINE}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    onClick={onSave}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                    </>
                )}
            </HStack>
        );
    },
);

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader';
