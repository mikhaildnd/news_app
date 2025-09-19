import { RootState } from 'app/providers/StoreProvider/config/store'; // импорт из вышестоящего слоя! в качестве исключения для типов

export const getCounter = (state: RootState) => state.counter ?? { value: 0 };
