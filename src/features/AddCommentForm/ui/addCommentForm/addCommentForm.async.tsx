import { FC, lazy } from 'react';
import { addCommentFormProps } from './addCommentForm';

export const addCommentFormAsync = lazy<FC<addCommentFormProps>>(
    () =>
        new Promise((resolve) => {
            // eslint-disable-next-line
            // @ts-ignore
            setTimeout(() => resolve(import('./addCommentForm')), 1500);
        }),
);
