import { createSlice } from "@reduxjs/toolkit";
import { Card, Dashboard } from "../types";




const initialState = { card: [], graph: '' } as Dashboard
export const dashboardSlice = createSlice({
    name: 'dashboard_slice',
    initialState,
    reducers: {},
})
export const { } = dashboardSlice.actions
export const dashboardReducer = dashboardSlice.reducer