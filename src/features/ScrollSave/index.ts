export type { ScrollSaveSchema } from './model/types/scrollSaveSchema';
export { getScrollSaveByPath } from './model/selectors/scrollSaveSelector';
// export {
//     scrollSaveSlice,
//     scrollSaveSliceActions,
// } from 'features/ScrollSave/model/slices/scrollSaveSlice';
export {
    scrollSaveActions,
    scrollSaveReducer,
} from './model/slices/scrollSaveSlice';
