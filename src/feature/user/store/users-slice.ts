import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../api";
import { RoleType } from "../../../constants";
import { GetUsersFilter } from "../types";

export const fetchUsers = createAsyncThunk(
    'users/fetch-users',
    async (payload: GetUsersFilter) => {
        try {
            const response = await getUsers(payload)
            return response.data
        } catch (error) {

        }

    }
)


const usersSlice = createSlice({
    name: "users slice",
    initialState: {
        filters: {
            status: 'Active'

        },
        users: []
    },
    reducers: {
        setFilterStatus: (state, action) => {
            return { ...state, filters: { status: action.payload.status } }
        }
    }
})


export const usersReducer = usersSlice.reducer
export const { setFilterStatus } = usersSlice.actions