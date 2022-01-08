
export const types = {
    ASSIGN_ROLE: 'ASSIGN_ROLE',
    ROLE_SELECTED: 'ROLE_SELECTED',
    NEW_ROLE: 'NEW_ROLE',
    EDIT_ROLE: 'EDIT_ROLE',
    DELETE_ROLE: 'DELETE_ROLE',
    NEW_PROFILE: 'NEW_PROFILE',
    PROFILE_SELECTED: 'PROFILE_SELECTED',
    UPDATE_PROFILE: 'UPDATE_PROFILE',
    DELETE_PROFILE: 'DELETE_PROFILE',
    PROFILE_SELECTED: 'PROFILE_SELECTED',
}

export const initialStates = {
    roleSel: {},
    profileSel: {},
    roles: [
        { id: 1, name: 'Super Admin', description: 'Usuario superadmin' },
        { id: 2, name: 'Admin', description: 'Usuario admin' }
    ],
    profiles: [
        { id: 1, user_id: 1, role_id: null, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" },
        { id: 2, user_id: 2, role_id: null, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }
    ],
    users: [
        { id: 1, name: "Usuario 1", email: "emailusuario1@test.com", password: 'password' },
        { id: 2, name: "Usuario 2", email: "emailusuario2@test.com", password: 'password' }
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
        case types.PROFILE_SELECTED: {
            let selectedProfile = state.profiles.find(profile => profile.id === action.payload)
            let userProfile = state.users.find(user => user.id === selectedProfile.user_id)
            let roleProfile = state.roles.find(role => role.id === selectedProfile.role_id)
            let profileSel = {
                profile: selectedProfile,
                userProfile,
                roleProfile
            }
            return {
                ...state,
                profileSel
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
        case types.NEW_PROFILE:

            return {
                ...state,
                profiles: [
                    ...state.profiles,
                    action.payload
                ]
            }

        case types.EDIT_ROLE:

            return {
                ...state,
                roles: state.roles.map(role => role.id === action.payload.id ? action.payload : role)
            }
        case types.UPDATE_PROFILE:

            return {
                ...state,
                profiles: state.profiles.map(profile => profile.id === action.payload.id ? action.payload : profile)
            }

        case types.ASSIGN_ROLE: {
            let profileEdit = state.profiles.find(profile => profile.id === parseInt(action.payload.profile_id));
            profileEdit.role_id = parseInt(action.payload.role_id);
            return {
                ...state,
                profiles: state.profiles.map(profile => profile.id === action.payload.id ? action.payload : profile)
            };
        }

        case types.DELETE_ROLE:

            return {
                ...state,
                roles: state.roles.filter(role => role.id !== action.payload)
            }
        case types.DELETE_PROFILE:

            return {
                ...state,
                profiles: state.profiles.filter(profile => profile.id !== action.payload)
            }

        default:
            return state;
    }
}