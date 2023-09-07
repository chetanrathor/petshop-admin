import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryFilterStatusPayload, CategorySlice, CatgoryFilter } from "../types";
import { getCategories } from "../api";

export const fetchProductCategories = createAsyncThunk(
    'categories/fetchProductCategories',
    async (payload: CatgoryFilter, { rejectWithValue }) => {
        try {
            const response = await getCategories(payload)
            return response.data

        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

const initialState = {
    categories: new Array(),
    filters: { status: 'Active' }
} as unknown as CategorySlice
export const categorySlice = createSlice({
    name: 'category-slice',
    initialState,
    reducers: {
        setCategoryFilterStatus: (state, action: PayloadAction<CategoryFilterStatusPayload>) => {
            const { status } = action.payload
            return { ...state, filters: { status } }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductCategories.fulfilled, (state, { payload }) => {
            return { ...state, categories: payload.response.data }
        })
    }
})

export const categoryReducer = categorySlice.reducer
export const { setCategoryFilterStatus } = categorySlice.actions