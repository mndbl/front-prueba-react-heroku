export const types = {
    AUTH_LOGIN: 'AUTH_LOGIN',
    AUTH_LOGOUT: 'AUTH_LOGOUT',
}


export const initialState = {
    user: {
        username: '',
        accessToken: '',
        role: ''
    }
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case types.AUTH_LOGIN:
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('username', action.payload.username);
            return {
                ...state,
                user: action.payload
            }

        case types.AUTH_LOGOUT:
            localStorage.removeItem('accessToken')
            localStorage.removeItem('username')
            return {
                ...state,
                user: initialState.user
            }
        default:
            return state;
    }
}