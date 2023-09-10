import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../feature/product/store/product-slice";
import { fetchProductCategories } from "../feature/category/state/category.slice";

export const paginationSlice = createSlice({
    name: 'pagination/slice',
    initialState: {
        limit: 10,
        offset: 0,
        totalPages: 0

    },
    reducers: {
        setLimit: (state, { payload }: PayloadAction<number>) => {
            return { ...state, limit: payload }
        },
        setOffset: (state, { payload }: PayloadAction<number>) => {
            return { ...state, offset: payload }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
            const { totalCount } = payload.response
            return { ...state, totalPages: totalCount / state.limit }
        })
        builder.addCase(fetchProductCategories.fulfilled, (state, { payload }) => {
            const { totalCount } = payload.response
            return { ...state, totalPages: Math.ceil(totalCount / state.limit) }
        })
    }
})

export const paginationReducer = paginationSlice.reducer
export const { setLimit, setOffset } = paginationSlice.actions