import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductFilterBrandPayload, ProductFilterBreedTypePayload, ProductFilterSpecyPayload, ProductFilterStatusPayload, ProductFilters } from "../types";
import { getProducts } from "../api";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducs',
    async (payload: ProductFilters, { rejectWithValue }) => {
        try {
            const response = await getProducts(payload)
            return response.data

        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)


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

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            const products = action.payload.response.data
            return { ...state, products }
        })
    }
})


export const productReducer = productsSlice.reducer
export const { setProductFilterBrand, setProductFilterBreedType, setProductFilterSpecy, setProductFilterStatus } = productsSlice.actions