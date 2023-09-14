import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Dashboard } from "../types";


export const fetchDashboardData = createAsyncThunk('dashboard/data/year', async (year: number, { rejectWithValue }) => {


})



const date = new Date()
const currentYear = date.getFullYear()

const initialState = { card: {}, graph: '', year: currentYear } as Dashboard
export const dashboardSlice = createSlice({
    name: 'dashboard_slice',
    initialState,
    reducers: {
        setYear: (state, action: { payload: number, type: string }) => {
            return { ...state, year: action.payload }
        }
    },
})
export const { setYear } = dashboardSlice.actions
export const dashboardReducer = dashboardSlice.reducer


