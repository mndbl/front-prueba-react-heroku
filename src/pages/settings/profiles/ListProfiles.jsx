import { useContext } from 'react'
import GlobalContext from '../../../context/globalStore/GlobalContext';
import { types } from '../../../context/globalStore/globalReducer';


export function ListProfiles({ setShow, setShowEdit }) {
    const [profileState, dispatch] = useContext(GlobalContext);
    const { profiles, roles, users } = profileState;

    const handleUpdateProfile = (id) => {
        dispatch({
            type: types.PROFILE_SELECTED,
            payload: id
        })
        setShowEdit(true)
    }
    const handleShowProfile = (id) => {
        dispatch({
            type: types.PROFILE_SELECTED,
            payload: id
        })
        setShow(true)
    }

    return (
        profiles.map((profile, index) => {
            return (
                <tr key={'profile-' + profile.id} className={`${index % 2 === 0 && 'bg-gray-100'} hover:bg-gray-200`}>
                    <td className="p-2 whitespace-nowrap flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                            <img className="w-9 h-9 rounded-full object-cover object-center" src={profile.avatar} width="36" height="36" alt={profile.id} />
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">{users.map(user => {
                                return user.id === profile.user_id && user.name
                            })}</p>
                            <span>{users.map(user => {
                                return user.id === profile.user_id && user.email
                            })}</span>
                        </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{roles.map(role => {
                            return role.id === profile.role_id && role.name
                        })}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap space-x-2 mx-auto text-center">

                        <button className=" font-medium text-green-500" onClick={() => handleShowProfile(profile.id)}>show</button>
                        <button className=" font-medium text-green-500" onClick={() => handleUpdateProfile(profile.id)}>edit</button>
                        <button className=" font-medium text-green-500" onClick={() => dispatch({ type: types.DELETE_PROFILE, payload: profile.id })}>delete</button>
                    </td>

                </tr>
            )
        })

    )
}
