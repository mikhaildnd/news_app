import { StateSchema } from 'app/providers/StoreProvider'; // импорт из вышестоящего слоя! в качестве исключения для типов

export const getCounter = (state: StateSchema) => state.counter;
