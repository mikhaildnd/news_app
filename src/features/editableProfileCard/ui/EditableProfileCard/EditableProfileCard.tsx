import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { updateProfile } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t(
            'Серверная ошибка при сохранении',
        ),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Имя и фамилия обязательны',
        ),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    };

    useInitialEffect(() => {
        if (id) {
            void dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ firstname: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ age: Number(value || 0) }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(updateProfile({ country }));
        },
        [dispatch],
    );

    return (
        // <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <VStack gap="8" max className={classNames('', {}, [className])}>
            <EditableProfileCardHeader />
            {validateErrors?.length &&
                validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </VStack>
        // </DynamicModuleLoader>
    );
});

EditableProfileCard.displayName = 'EditableProfileCard';
