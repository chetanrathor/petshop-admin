import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Card, Dashboard } from "../types";
import { getCards } from "../api";
import { AxiosError } from "axios";


export const fetchDashboardData = createAsyncThunk('dashboard/data/year', async (year: number, { rejectWithValue }) => {

    // try {
    //     const response = await getCards({ year })
    //     return response.data
    // } catch (error: any) {
    //     return rejectWithValue(error.response.data)

    // }
    const response = await getCards({ year })
        return response.data
})



const date = new Date()
const currentYear = date.getFullYear()

const initialState = { card: [], graph: '', year: currentYear } as Dashboard
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

function rejectWithValue(data: any): any {
    throw new Error("Function not implemented.");
}
