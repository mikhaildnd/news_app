import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import type { ArticleTextBlock } from '../../model/types/article';
import { ToggleComponentFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    function ArticleTextBlockComponent(props: ArticleTextBlockComponentProps) {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleComponentFeatures
                        feature="isAppRedesigned"
                        on={<Text title={block.title} className={cls.title} />}
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((paragraph) => (
                    <ToggleComponentFeatures
                        key={paragraph}
                        feature="isAppRedesigned"
                        on={<Text text={paragraph} className={cls.paragraph} />}
                        off={
                            <TextDeprecated
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
