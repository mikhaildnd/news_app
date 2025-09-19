import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const AboutPage = memo(function AboutPage() {
    const { t } = useTranslation('about');

    return <div>{t('О сайте')}</div>;
});

export default AboutPage;
