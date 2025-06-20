import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authReducer';
import authMiddleware from './authMiddleware';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authMiddleware),
});

export default store;