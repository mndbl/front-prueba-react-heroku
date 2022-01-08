import { useContext, useState } from 'react'
import { CancelButton } from "../../../components/buttons/CancelButton";
import { SubmitButton } from "../../../components/buttons/SubmitButton";
import GlobalContext from '../../../context/globalStore/GlobalContext';
import { types } from '../../../context/globalStore/globalReducer';

export function UpdateProfile({ setShow }) {
    const [avatar, setAvatar] = useState();
    const [store, dispatch] = useContext(GlobalContext)
    const { profileSel, users, roles } = store;
    const [profile, setProfile] = useState(profileSel.profile);
    const handleAvatar = e => {
        e.preventDefault();
        setAvatar(e.target.files[0]);
    }
    const updateProfile = (e) => {
        e.preventDefault();
        dispatch({
            type: types.UPDATE_PROFILE,
            payload: profile
        })
        setShow(false)
    }
    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="flex justify-between px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-500">Add New Profile</h2>
            </header>
            <div className="p-3">
                <form className="max-w-md mx-auto py-4 relative" >
                    {profile.avatar &&
                        <img className="object-cover object-center rounded-t-lg w-full h-[16rem]" src={profile.avatar} alt="avatar" />
                    }
                    <div className=" relative ">
                        <label htmlFor="required-name" className="text-gray-600">
                            Name
                            <span className="text-red-500 required-dot">
                                *
                            </span>
                        </label>
                        <input type="file" id="avatar" onChange={e => handleAvatar(e)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="avatar" />
                    </div>
                    <div className="my-2 flex space-x-2">
                        <CancelButton text="Cancel" />
                        <SubmitButton text="Upload" />
                    </div>
                </form>
                <form className="max-w-md mx-auto py-4" onSubmit={updateProfile}>
                    <div className=" relative ">
                        <label htmlFor="required-user" className="text-gray-600">
                            User
                            <span className="text-red-500 required-dot">
                                *
                            </span>
                        </label>
                        <select id="required-user" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="user" onChange={e => setProfile({ ...profile, user_id: parseInt(e.target.value) })} value={profile.user_id}>
                            <option value="" key="">Seleccione</option>
                            {users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
                        </select>

                    </div>
                    <div className=" relative ">
                        <label htmlFor="required-role" className="text-gray-600">
                            Role
                            <span className="text-red-500 required-dot">
                                *
                            </span>
                        </label>
                        <select id="required-role" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="role" onChange
                            onChange={e => setProfile({ ...profile, role_id: parseInt(e.target.value) })} value={profile.role_id ? profile.role_id : 0}>
                            <option value="" key="">Seleccione</option>
                            {roles.map(role => <option value={role.id} key={role.id}>{role.name}</option>)}
                        </select>

                    </div>

                    <div className="my-2 flex space-x-2">
                        <CancelButton text="Cancel" setShow={setShow} />
                        <SubmitButton text="Save" />
                    </div>
                </form>
            </div>
        </div>
    )
}
