// import { RootState } from 'app/providers/StoreProvider/config/store'; // импорт из вышестоящего слоя! в качестве исключения для типов

import { StateSchema } from '@/app/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter ?? { value: 0 };
