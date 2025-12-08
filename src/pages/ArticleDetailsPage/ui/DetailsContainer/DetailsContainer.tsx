import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleDetails } from '@/entities/Article';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <Card max border="borderRound" className={className} padding="24">
            <ArticleDetails id={id} />
        </Card>
    );
});

DetailsContainer.displayName = 'DetailsContainer';
