import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBrands } from "../api";
import { BrandFilters, BrandSlice, BrandsFilterStatusPayload } from "../types";

export const fetchBrands = createAsyncThunk(
    'brands/fetchbrands',
    async (payload: BrandFilters, { rejectWithValue }) => {
        try {
            const response = await getBrands(payload)
            return response.data

        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

const initialState = {
    brands: new Array(),
    filters: { status: 'Active' }
} as unknown as BrandSlice
export const brandsSlice = createSlice({
    name: 'brands-slice',
    initialState,
    reducers: {
        setBrandStatus: (state, action: PayloadAction<BrandsFilterStatusPayload>) => {
            const { status } = action.payload
            return { ...state, filters: { status } }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBrands.fulfilled, (state, { payload }) => {
            console.log('payload', payload)
            return { ...state, brands: payload.response.data }
        })
    }
})

export const brandReducer = brandsSlice.reducer
export const { setBrandStatus } = brandsSlice.actions