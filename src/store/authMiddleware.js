const authMiddleware = () => next => action => {
    const result = next(action);

    if (action.type === 'LOGIN_SUCCESS') {
        localStorage.setItem('authToken', action.payload.token);
        console.log('Token disimpan di localStorage:', action.payload.token);
    } else if (action.type === 'LOGOUT') {
        localStorage.removeItem('authToken');
        console.log('Token dihapus dari localStorage');
    }

    return result;
};

export default authMiddleware;
