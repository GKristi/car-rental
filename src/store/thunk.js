import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../api/api'


export const getAdvertsThunk = createAsyncThunk('pagination/get', async (page, thunkApi) => {
    try {
        const response = await api.get(`/advert?page=${page}&limit=12`);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const getAllAdverts = createAsyncThunk('adverts/get', async (_, thunkApi) => {
    try {
        const response = await api.get(`/advert`);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})