import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../feature/dashboard/state/dashboard.slice";
import { globalReducer } from "./globalSlice";
import { usersReducer } from "../feature/user/store/users-slice";
import { productReducer } from "../feature/product/store/product-slice";
import { categoryReducer } from "../feature/category/state/category.slice";
import { modalReducer } from "./modalSlice";

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        global: globalReducer,
        users: usersReducer,
        product: productReducer,
        category: categoryReducer,
        modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch