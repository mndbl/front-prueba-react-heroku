import { useState } from 'react';
import { AddButton } from '../../../components/buttons/AddButton';
import { AdminContentLayout } from '../../../components/layouts/AdminContentLayout';
import { HeaderContentLayout } from '../../../components/layouts/HeaderContentLayout';
import { AssignRole } from './AssignRole';
import CreateRole from './CreateRole';
import { ListRoles } from './ListRoles';
import UpdateRole from './UpdateRole';


export function RoleIndex() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [assignRoleForm, setAssignRoleForm] = useState(false);



    return (
        <>
            {!showCreateForm && !showUpdateForm && !assignRoleForm &&
                <AdminContentLayout>
                    <HeaderContentLayout description="Roles">

                        <div className="space-x-2">
                            <AddButton onclick={() => setShowCreateForm(true)} text="Add Role" />
                            <AddButton onclick={() => setAssignRoleForm(true)} text="Assign Role" />
                        </div>
                    </HeaderContentLayout>
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
                </AdminContentLayout>
            }
            {showCreateForm && <CreateRole setShow={setShowCreateForm} />}
            {showUpdateForm && <UpdateRole setShow={setShowUpdateForm} />}
            {assignRoleForm && <AssignRole setShow={setAssignRoleForm} />}
        </>
    )
}
