import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import type { ArticleImageBlock } from '../../model/types/article';
import { ToggleComponentFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    function ArticleImageBlockComponent(
        props: ArticleImageBlockComponentProps,
    ) {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} className={cls.img} alt={block.title} />
                {block.title && (
                    <ToggleComponentFeatures
                        feature="isAppRedesigned"
                        on={<Text text={block.title} align="center" />}
                        off={
                            <TextDeprecated
                                text={block.title}
                                align={TextAlign.CENTER}
                            />
                        }
                    />
                )}
            </div>
        );
    },
);
