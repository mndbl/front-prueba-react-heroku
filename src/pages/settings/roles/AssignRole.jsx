import { useContext, useState } from 'react'
import { SubmitButton } from '../../../components/buttons/SubmitButton'
import { CancelButton } from '../../../components/buttons/CancelButton'
import GlobalContext from '../../../context/globalStore/GlobalContext';
import { types } from '../../../context/globalStore/globalReducer';
import { AdminContentLayout } from '../../../components/layouts/AdminContentLayout';
import { HeaderContentLayout } from '../../../components/layouts/HeaderContentLayout';
import { Form } from '../../../components/forms/Form';

export function AssignRole({ setShow }) {
    const [roleState, dispatch] = useContext(GlobalContext);
    const { roles, profiles } = roleState;
    const [profile_id, setProfile_id] = useState()
    const [role_id, setRole_id] = useState()
    const handleAssignRole = (e) => {
        e.preventDefault();
        let newAssign = {
            profile_id,
            role_id
        }
        dispatch({
            type: types.ASSIGN_ROLE,
            payload: newAssign
        })
        setShow(false);
    }
    return (
        <AdminContentLayout>
            <HeaderContentLayout description="Assign Role" />
            <Form onSubmitForm={handleAssignRole}>
                <div className=" relative ">
                    <label htmlFor="required-profile" className="text-gray-600">
                        Profile
                        <span className="text-red-500 required-dot">
                            *
                        </span>
                    </label>
                    <select onChange={(e) => setProfile_id(e.target.value)} value={profile_id} type="text" id="required-profile" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="profile">
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
                    <select onChange={(e) => setRole_id(e.target.value)} value={role_id} type="text" id="required-role" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="role">
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
            </Form>
        </AdminContentLayout>
    )
}
