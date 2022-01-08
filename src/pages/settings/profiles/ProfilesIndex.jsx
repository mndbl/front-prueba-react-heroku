import { useState } from 'react'
import { AddButton } from '../../../components/buttons/AddButton'
import { AssignRole } from '../roles/AssignRole';
import { CreateProfile } from './CreateProfile';
import { ListProfiles } from './ListProfiles'
import { ShowProfile } from './ShowProfile';
import { UpdateProfile } from './UpdateProfile';

export default function ProfilesIndex() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [assignRoleForm, setAssignRoleForm] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    return (
        <>
            {!showCreateForm && !showUpdateForm && !assignRoleForm && !showProfile &&
                <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="overflow-x-auto">
                        <header className="flex justify-between px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Roles</h2>
                            <div className="space-x-2">
                                <AddButton onclick={() => setShowCreateForm(true)} text="Add Profile" />
                                <AddButton onclick={() => setAssignRoleForm(true)} text="Assign Role" />
                            </div>
                        </header>
                        <div className="p-3">
                            {/* Table */}
                            <table className="table-auto w-full">
                                {/* Table header */}
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">User</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Role</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Actions</div>
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm divide-y divide-gray-100">
                                    <ListProfiles setShow={setShowProfile} setShowEdit={setShowUpdateForm} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
            {showCreateForm && <CreateProfile setShow={setShowCreateForm} />}
            {showUpdateForm && <UpdateProfile setShow={setShowUpdateForm} />}
            {assignRoleForm && <AssignRole setShow={setAssignRoleForm} />}
            {showProfile && <ShowProfile setShow={setShowProfile} />}
        </>
    )
}
