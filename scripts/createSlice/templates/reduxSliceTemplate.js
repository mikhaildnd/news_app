const firstCharUpperCase = require('../firstCharUpperCase');
const interfaceConst = 'interface';

module.exports = (sliceName) => {
    const typeName = `${firstCharUpperCase(sliceName)}Schema`;

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${sliceName}Schema';
import { WithSlice } from '@reduxjs/toolkit';

const initialState: ${typeName} = {
    
};

export const ${sliceName}Slice = createSlice({
    name: '${sliceName}',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           reset: () => initialState,
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

// export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
// export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;

export const injected${firstCharUpperCase(sliceName)}Slice =
    ${sliceName}Slice.injectInto(rootReducer);
export const ${sliceName}Reducer = ${sliceName}Slice.reducer;
export const ${sliceName}Actions = ${sliceName}Slice.actions;

declare module 'app/providers/StoreProvider/config/store' {
    ${interfaceConst} LazyLoadedSlices extends WithSlice<typeof ${sliceName}Slice> {}
}`;
};
