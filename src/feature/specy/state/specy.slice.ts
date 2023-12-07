import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addSpecy, getSpecies } from "../api";
import { AddSpecy, SpeciesFilterStatusPayload, SpecyFilters, SpecySlice } from "../types";

export const fetchSpecies = createAsyncThunk(
    'species/fetchSpecies',
    async (payload: SpecyFilters, { rejectWithValue }) => {
        try {
            const response = await getSpecies(payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const createSpecy = createAsyncThunk(
    'species/create',
    async (payload: AddSpecy, { rejectWithValue }) => {
        try {
            const response = await addSpecy(payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    species: [],
    filters: { status: 'Active' }
} as unknown as SpecySlice;

export const speciesSlice = createSlice({
    name: 'species-slice',
    initialState,
    reducers: {
        setSpeciesFilterStatus: (state, action: PayloadAction<SpeciesFilterStatusPayload>) => {
            const { status } = action.payload;
            return { ...state, filters: { status } };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSpecies.fulfilled, (state, { payload }) => {
            return { ...state, species: payload.response.data };
        });
    }
});

export const speciesReducer = speciesSlice.reducer;
export const { setSpeciesFilterStatus } = speciesSlice.actions;
