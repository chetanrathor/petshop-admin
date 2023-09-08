import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../feature/dashboard/state/dashboard.slice";
import { globalReducer } from "./globalSlice";
import { usersReducer } from "../feature/user/store/users-slice";
import { productReducer } from "../feature/product/store/product-slice";
import { categoryReducer } from "../feature/category/state/category.slice";
import { modalReducer } from "./modalSlice";
import { brandReducer } from "../feature/brand/state/brand.slice";
import { speciesReducer } from "../feature/specy/state/specy.slice";
import { blogReducer, blogSlice } from "../feature/blog/state/blog.slice";
import { loaderReducer } from "./loaderSlice";

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        global: globalReducer,
        users: usersReducer,
        product: productReducer,
        category: categoryReducer,
        modal: modalReducer,
        brand: brandReducer,
        specy: speciesReducer,
        blog: blogReducer,
        loader: loaderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch