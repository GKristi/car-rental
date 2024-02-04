import { createSlice } from "@reduxjs/toolkit";
import { getAdvertsThunk, getAllAdverts } from "./thunk";

const slice = createSlice({
    name: "adverts",
    initialState: {
        adverts: [],
        allAdverts: [],
        favorites: [],
        isLoading: false,
        isError: null,
        loadMore: true,
    },
    reducers: {
        setLoadMore: (state, { payload }) => {
            state.loadMore = payload;
        },
        setFavorites: (state, { payload }) => {
            state.favorites = [...state.favorites, payload];
        },
        removeFavorites: (state, { payload }) => {
            state.favorites = state.favorites.filter(({ id }) => id !== payload)
        },

    },

    extraReducers: builder => {
        builder.addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
            if (payload.length < 12) { state.loadMore = false }

            const uniquePayload = payload.filter(({ id }) => (
                !state.adverts.some(existingAdvert => existingAdvert.id === id)
            ));

            state.adverts = [...state.adverts, ...uniquePayload];
            state.isLoading = false;
        })
            .addCase(getAdvertsThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAdvertsThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            })
            .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
                state.allAdverts = payload;
                state.isLoading = false;
            })
            .addCase(getAllAdverts.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllAdverts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            })
    }
})
export const { setLoadMore, setFavorites, removeFavorites } = slice.actions
export const rootReducer = slice.reducer