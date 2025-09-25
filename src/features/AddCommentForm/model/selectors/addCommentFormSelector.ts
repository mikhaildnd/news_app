import { RootState } from 'app/providers/StoreProvider/config/store';
import { injectedAddCommentFormSlice } from 'features/AddCommentForm/model/slice/addCommentFormSlice';

export const getAddCommentFormText = (state: RootState) =>
    injectedAddCommentFormSlice.selectSlice(state)?.text;
export const getAddCommentFormError = (state: RootState) =>
    injectedAddCommentFormSlice.selectSlice(state)?.error;
