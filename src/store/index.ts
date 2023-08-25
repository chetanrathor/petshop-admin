import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../feature/dashboard/state/dashboard.slice";

export const store = configureStore({
    reducer: { dashboardReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch