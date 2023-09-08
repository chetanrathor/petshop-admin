// blogSlice.ts

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BlogFilterStatusPayload, BlogSlice, BlogsFilter } from "../types/index";
import { getBlogs } from "../api";

export const fetchBlogs = createAsyncThunk(
    'blogs/fetchBlogs',
    async (payload: BlogsFilter, { rejectWithValue }) => {
        try {
            const response = await getBlogs(payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    blogs: [],
    filters: { status: 'Active' }
} as unknown as BlogSlice;

export const blogSlice = createSlice({
    name: 'blog-slice',
    initialState,
    reducers: {
        setBlogFilterStatus: (state, action: PayloadAction<BlogFilterStatusPayload>) => {
            const { status } = action.payload;
            return { ...state, filters: { status } };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.fulfilled, (state, { payload }) => {
            return { ...state, blogs: payload.response.data };
        });
    }
});

export const blogReducer = blogSlice.reducer;
export const { setBlogFilterStatus } = blogSlice.actions;
