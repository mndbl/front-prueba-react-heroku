
export const types = {
    ROLE_SELECTED: 'ROLE_SELECTED',
    NEW_ROLE: 'NEW_ROLE',
    EDIT_ROLE: 'EDIT_ROLE',
    DELETE_ROLE: 'DELETE_ROLE',
}

export const initialStates = {
    roleSel: {},
    roles: [
        { id: 0, name: 'Super Admin', description: 'Usuario superadmin' },
        { id: 1, name: 'Admin', description: 'Usuario admin' }
    ]
}




export const globalReducer = (state, action) => {
    switch (action.type) {
        case types.ROLE_SELECTED: {
            let roleSel = state.roles.find(role => role.id === action.payload)
            return {
                ...state,
                roleSel
            };
        }
        case types.NEW_ROLE:

            return {
                ...state,
                roles: [
                    ...state.roles,
                    action.payload
                ]
            }


        case types.EDIT_ROLE:

            return {
                ...state,
                roles: state.roles.map(role => role.id === action.payload.id ? action.payload : role)
            }


        case types.DELETE_ROLE:

            return {
                ...state,
                roles: state.roles.filter(role => role.id !== action.payload)
            }

        default:
            return state;
    }
}