import { useContext, useState } from 'react'
import { SubmitButton } from '../../../components/SubmitButton'
import { CancelButton } from '../../../components/CancelButton'
import GlobalContext from '../../../context/globalStore/GlobalContext';

export function AssignRole({ setShow }) {
    const [roleState, dispatch] = useContext(GlobalContext);
    const { roles, profiles } = roleState;
    const [profile, setProfile] = useState()
    const [role, setRole] = useState()
    const handleAssignRole = () => {
        let newAssign = {
            profile,
            role
        }
        console.log(newAssign);
    }
    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="overflow-x-auto">
                <header className="flex justify-between px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">Assign Roles</h2>
                </header>
                <div className="p-3">
                    <form className="max-w-md mx-auto py-4" onSubmit={handleAssignRole}>

                        <div className=" relative ">
                            <label htmlFor="required-profile" className="text-gray-600">
                                Profile
                                <span className="text-red-500 required-dot">
                                    *
                                </span>
                            </label>
                            <select onChange={(e) => setProfile(e.target.value)} value={profile} type="text" id="required-profile" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="profile">
                                <option value="" key="">Seleccione</option>
                                {
                                    profiles.map(prof =>
                                        <option value={prof.id} key={`prof-${prof.id}`}>{`Profile: ${prof.id}`}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className=" relative ">
                            <label htmlFor="required-role" className="text-gray-600">
                                Role
                                <span className="text-red-500 required-dot">
                                    *
                                </span>
                            </label>
                            <select onChange={(e) => setRole(e.target.value)} value={role} type="text" id="required-role" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="role">
                                <option value="" key="">Seleccione</option>
                                {
                                    roles.map(role =>
                                        <option value={role.id} key={`role-${role.id}`}>{role.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="my-2 flex space-x-2">
                            <CancelButton text="Cancel" setShow={setShow} />
                            <SubmitButton text="Save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
