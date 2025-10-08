import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from '../../model/types/article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    // чтобы не писать костыли с преобразованием типов как ниже,
    // переписал типы компонента Select, добавил дженерик <T extends string>
    // const onChangeSortHandler = useCallback(
    //     (newSort: string) => {
    //         onChangeSort(newSort as ArticleSortField);
    //     },
    //     [onChangeSort],
    // );
    //
    // const onChangeOrderHandler = useCallback(
    //     (newOrder: string) => {
    //         onChangeOrder(newOrder as SortOrder);
    //     },
    //     [onChangeOrder],
    // );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField> // Пример. Можно явно указывать
                onChange={onChangeSort}
                value={sort}
                options={sortFieldOptions}
                label={t('Сортировать по')}
            />
            <Select
                onChange={onChangeOrder}
                value={order}
                options={orderOptions}
                label={t('по')}
            />
        </div>
    );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
