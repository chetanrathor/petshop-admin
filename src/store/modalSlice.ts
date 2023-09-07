import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalSlice } from "../types";
import { ModalChild } from "../constants/modal-child";
import { fetchProductCategories } from "../feature/category/state/category.slice";

const initialState = { children: ModalChild.Category, open: false } as unknown as ModalSlice
export const modalSlice = createSlice({
    initialState,
    name: 'modal-slice',
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            return { ...state, open: action.payload }
        },
        setModalChild: (state, action: PayloadAction<ModalChild>) => {
            return { ...state, children: action.payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductCategories.fulfilled, (state, action) => {
            return { ...state, open: false }
        })
    }
})


export const modalReducer = modalSlice.reducer
export const { setModalChild, setOpen } = modalSlice.actions