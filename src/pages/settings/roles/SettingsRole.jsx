import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AddButton } from '../../../components/AddButton';
import { GlobalProvider } from '../../../context/globalStore/GlobalProvider';
import { AdminContentLayout } from '../../../layouts/AdminContentLayout';
import { AssignRole } from './AssignRole';
import CreateRole from './CreateRole';
import { ListRoles } from './ListRoles';
import UpdateRole from './UpdateRole';


export function SettingsRole() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [assignRoleForm, setAssignRoleForm] = useState(false);
    const history = useHistory()
    const handleNewRole = () => {
        history.push('/settings/add-role')
    }

    return (
        <GlobalProvider>
            {!showCreateForm && !showUpdateForm && !assignRoleForm &&
                <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="overflow-x-auto">
                        <header className="flex justify-between px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Roles</h2>
                            <div className="space-x-2">
                                <AddButton onclick={() => setShowCreateForm(true)} text="Add Role" />
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
                                            <div className="font-semibold text-left">Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Description</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Actions</div>
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm divide-y divide-gray-100">
                                    <ListRoles setShow={setShowUpdateForm} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
            {showCreateForm && <CreateRole show={showCreateForm} setShow={setShowCreateForm} />}
            {showUpdateForm && <UpdateRole show={showUpdateForm} setShow={setShowUpdateForm} />}
            {assignRoleForm && <AssignRole show={assignRoleForm} setShow={setAssignRoleForm} />}
        </GlobalProvider>
    )
}
