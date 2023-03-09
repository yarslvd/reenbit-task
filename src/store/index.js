import { configureStore } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

export default configureStore({
    reducer: {
        [fetchApi.reducerPath]: fetchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApi.middleware)
});