import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/providers/StoreProvider';

// Кастомный хук, который отдает !типизированный диспатч
export const useAppDispatch = () => useDispatch<AppDispatch>();
