import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "../feature/blog/state/blog.slice";
import { brandReducer } from "../feature/brand/state/brand.slice";
import { categoryReducer } from "../feature/category/state/category.slice";
import { dashboardReducer } from "../feature/dashboard/state/dashboard.slice";
import { productReducer } from "../feature/product/store/product-slice";
import { speciesReducer } from "../feature/specy/state/specy.slice";
import { usersReducer } from "../feature/user/store/users-slice";
import { centralSearchReducer } from "./centralSearch";
import { globalReducer } from "./globalSlice";
import { loaderReducer } from "./loaderSlice";
import { modalReducer } from "./modalSlice";
import { paginationReducer } from "./pagination.slice";
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
        loader: loaderReducer,
        pagination: paginationReducer,
        centralSearch: centralSearchReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch