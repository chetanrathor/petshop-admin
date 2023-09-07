import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductFilterBrandPayload, ProductFilterBreedTypePayload, ProductFilterSpecyPayload, ProductFilterStatusPayload } from "../types";

export const productsSlice = createSlice({
    initialState: {
        products: new Array(),
        filters: {
            status: '',
            specy: '',
            brand: '',
            breedType: ''
        }
    },
    name: 'products/slice',
    reducers: {
        setProductFilterStatus: (state, action: PayloadAction<ProductFilterStatusPayload>) => {
            const { status } = action.payload
            return { ...state, filters: { ...state.filters, status } }
        },
        setProductFilterBrand: (state, action: PayloadAction<ProductFilterBrandPayload>) => {
            const { brand } = action.payload
            return { ...state, filters: { ...state.filters, brand } }
        },
        setProductFilterBreedType: (state, action: PayloadAction<ProductFilterBreedTypePayload>) => {
            const { breedType } = action.payload
            return { ...state, filters: { ...state.filters, breedType } }
        },
        setProductFilterSpecy: (state, action: PayloadAction<ProductFilterSpecyPayload>) => {
            const { specy } = action.payload
            return { ...state, filters: { ...state.filters, specy } }
        }
    }
})


export const productReducer = productsSlice.reducer
export const { setProductFilterBrand, setProductFilterBreedType, setProductFilterSpecy, setProductFilterStatus } = productsSlice.actions