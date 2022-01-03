import { useContext } from 'react'
import GlobalContext from '../../../context/globalStore/GlobalContext';
import { types } from '../../../context/globalStore/globalReducer';


export function ListRoles({ setShow }) {
    const [initialStates, dispatch] = useContext(GlobalContext);
    const { roles } = initialStates;

    const handleUpdateRole = (role_id) => {
        dispatch({
            type: types.ROLE_SELECTED,
            payload: role_id
        })
        setShow(true)
    }
    return (
        roles.map((role, index) => {
            return (
                <tr key={'role-' + role.id} className={`${index % 2 === 0 && 'bg-gray-100'} hover:bg-gray-200`}>
                    <td className="p-2 whitespace-nowrap">
                        <p className="font-medium text-gray-800">{role.name}</p>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{role.description}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap space-x-2 mx-auto text-center">

                        <button className=" font-medium text-green-500" onClick={() => handleUpdateRole(role.id)}>edit</button>
                        <button className=" font-medium text-green-500" onClick={() => dispatch({ type: types.DELETE_ROLE, payload: role.id })}>delete</button>
                    </td>

                </tr>
            )
        })

    )
}
