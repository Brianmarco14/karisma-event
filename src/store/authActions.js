export const loginSuccess = (token, user) => ({
    type: 'LOGIN_SUCCESS',
    payload: {token, user},
});

export const logout = () => ({
    type: 'LOGOUT',
});