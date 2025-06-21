import {createSlice} from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const initialState = {
    token: token || null,
    isAuthenticated: !!token,
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            console.log(state.token)
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
    },
});

export const {login, logout} = authReducer.actions;
export default authReducer.reducer;
