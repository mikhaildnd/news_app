import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = memo(function MainPage() {
    const { t } = useTranslation();

    return (
        <Page>
            <Counter />
            {t('Главная страница')}
        </Page>
    );
});

export default MainPage;
