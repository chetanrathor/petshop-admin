import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchProductCategories } from "../feature/category/state/category.slice";
import { fetchSpecies } from "../feature/specy/state/specy.slice";
import { fetchBrands } from "../feature/brand/state/brand.slice";

export const loaderSlice = createSlice({
    initialState: { loader: true },
    name: 'loader/slice',
    reducers: {
        setLoader: (state, action: PayloadAction<boolean>) => {
            return { ...state, loader: action.payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductCategories.fulfilled, (state, { payload }) => {
            return { ...state, loader: false }
        })
        builder.addCase(fetchProductCategories.pending, (state, { payload }) => {
            return { ...state, loader: true }
        })
        builder.addCase(fetchProductCategories.rejected, (state, { payload }) => {
            return { ...state, loader: true }
        })
        builder.addCase(fetchSpecies.fulfilled, (state, { payload }) => {
            return { ...state, loader: false }
        })
        builder.addCase(fetchBrands.fulfilled, (state, { payload }) => {
            return { ...state, loader: false }
        })
       
    }
})

export const loaderReducer = loaderSlice.reducer
export const { setLoader } = loaderSlice.actions