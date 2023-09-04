import { createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "../constants/global-state";

export const globalSlice = createSlice({
    initialState: {
        activeState: 'Dashboard'
    },
    name: 'Global Slice ',
    reducers: {
        setGlobalSatate: (state, action: { type: string, payload: string }) => {
            return { ...state, activeState: action.payload }
        }
    }
})

export const globalReducer = globalSlice.reducer
export const { setGlobalSatate } = globalSlice.actions