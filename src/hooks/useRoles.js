import { now } from 'moment'
import { useState, useEffect, useContext } from 'react';

import GlobalContext from '../context/globalStore/GlobalContext';
import { types } from '../context/globalStore/globalReducer';

export const useRoles = (setShow) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [store, dispatch] = useContext(GlobalContext);
    const { roleSel } = store;

    useEffect(() => {
        if (roleSel) {
            setName(roleSel.name)
            setDescription(roleSel.description)
        }
    }, [roleSel])

    const handleAddRole = (e) => {
        e.preventDefault();
        let newRole = {
            id: now(),
            name,
            description
        }

        dispatch({ type: types.NEW_ROLE, payload: newRole })
        setName('')
        setDescription('')
        setShow(0);

    }

    const handleUpdateRole = (e, roleSel) => {
        e.preventDefault();
        let { id } = roleSel
        let updateRole = {
            id,
            name,
            description
        }
        dispatch({ type: types.EDIT_ROLE, payload: updateRole })
        setName('')
        setDescription('')
        setShow(0)
    }

    return {
        name,
        setName,
        description,
        setDescription,
        store,
        dispatch,
        types,
        roleSel,
        handleAddRole,
        handleUpdateRole
    }
}