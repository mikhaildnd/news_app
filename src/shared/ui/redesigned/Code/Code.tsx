import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import { Icon as IconDeprecated } from '../../deprecated/Icon/Icon';
import { Icon } from '../../redesigned/Icon/Icon';
import CopyIconNew from '@/shared/assets/icons/copy.svg?react';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg?react';
import cls from './Code.module.scss';
import { ToggleComponentFeatures } from '@/shared/lib/features';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    }, [text]);

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={
                <pre
                    className={classNames(cls.CodeRedesigned, {}, [className])}
                >
                    <Icon
                        clickable
                        onClick={onCopy}
                        className={cls.copyBtn}
                        Svg={CopyIconNew}
                    />
                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <Button
                        onClick={onCopy}
                        className={cls.copyBtn}
                        theme={ButtonTheme.CLEAR}
                    >
                        <IconDeprecated
                            Svg={CopyIcon}
                            className={cls.copyIcon}
                        />
                    </Button>
                    <code>{text}</code>
                </pre>
            }
        />
    );
});

Code.displayName = 'Code';
