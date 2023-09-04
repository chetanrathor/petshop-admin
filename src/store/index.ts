import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../feature/dashboard/state/dashboard.slice";
import { globalReducer } from "./globalSlice";

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        global: globalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch