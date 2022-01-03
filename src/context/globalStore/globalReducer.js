
export const types = {
    ASSIGN_ROLE: 'ASSIGN_ROLE',
    ROLE_SELECTED: 'ROLE_SELECTED',
    NEW_ROLE: 'NEW_ROLE',
    EDIT_ROLE: 'EDIT_ROLE',
    DELETE_ROLE: 'DELETE_ROLE',
}

export const initialStates = {
    roleSel: {},
    roles: [
        { id: 1, name: 'Super Admin', description: 'Usuario superadmin' },
        { id: 2, name: 'Admin', description: 'Usuario admin' }
    ],
    profiles: [
        { id: 1, user_id: 1, role_id: null },
        { id: 2, user_id: 2, role_id: null }
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

        case types.ASSIGN_ROLE:
            return state;


        case types.DELETE_ROLE:

            return {
                ...state,
                roles: state.roles.filter(role => role.id !== action.payload)
            }

        default:
            return state;
    }
}