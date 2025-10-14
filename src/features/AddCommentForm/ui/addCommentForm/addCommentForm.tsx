import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './addCommentForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    // getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { setText } from '../../model/slice/addCommentFormSlice';
import { HStack } from 'shared/ui/Stack';

export interface addCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const addCommentForm = memo((props: addCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    // const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <HStack
            justify="between"
            max
            className={classNames(cls.addCommentForm, {}, [className])}
        >
            <Input
                className={cls.input}
                placeholder={t('Введите текст комментария')}
                value={text}
                onChange={onCommentTextChange}
            />
            <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                {t('Отправить')}
            </Button>
        </HStack>
    );
});

addCommentForm.displayName = 'addCommentForm';
export default addCommentForm;
