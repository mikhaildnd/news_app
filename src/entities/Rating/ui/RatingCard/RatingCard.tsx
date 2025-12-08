import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import {
    Button as ButtonDprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        onCancel,
        hasFeedback = false,
        feedbackTitle,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                    />
                </>
            }
        />
    );

    const content = (
        <>
            <VStack align="center" gap="8">
                <ToggleComponentFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                    }
                    off={
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                    }
                />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <ToggleComponentFeatures
                            feature="isAppRedesigned"
                            on={
                                <HStack max gap="16" justify="end">
                                    <Button
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandler}
                                    >
                                        {t('Закрыть')}
                                    </Button>
                                    <Button
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandler}
                                    >
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack max gap="16" justify="end">
                                    <ButtonDprecated
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandler}
                                        theme={ButtonTheme.OUTLINE_RED}
                                    >
                                        {t('Закрыть')}
                                    </ButtonDprecated>
                                    <ButtonDprecated
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandler}
                                    >
                                        {t('Отправить')}
                                    </ButtonDprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap="32">
                        {modalContent}
                        <ToggleComponentFeatures
                            feature="isAppRedesigned"
                            on={
                                <Button
                                    onClick={acceptHandler}
                                    size="l"
                                    fullWidth
                                >
                                    {t('Отправить')}
                                </Button>
                            }
                            off={
                                <ButtonDprecated
                                    onClick={acceptHandler}
                                    size={ButtonSize.L}
                                    fullWidth
                                >
                                    {t('Отправить')}
                                </ButtonDprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleComponentFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    max
                    padding="24"
                    border="borderRound"
                    data-testid="RatingCard"
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    data-testid="RatingCard"
                    max
                    className={className}
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
});

RatingCard.displayName = 'RatingCard';
