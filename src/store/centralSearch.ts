import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const centralSearchSlice = createSlice({
    name: 'central/search',
    initialState: { search: '' },
    reducers: {
        setCentralSearch: (state, { payload }: PayloadAction<{ search: string }>) => {
            const { search } = payload
            return { ...state, search }
        }
    }
})

export const centralSearchReducer = centralSearchSlice.reducer
export const { setCentralSearch } = centralSearchSlice.actions