import { AddButton } from '../../../components/buttons/AddButton';
import { AdminContentLayout } from '../../../components/layouts/AdminContentLayout';
import { HeaderContentLayout } from '../../../components/layouts/HeaderContentLayout';
import { useShow } from '../../../hooks/useShow';
import { AssignRole } from './AssignRole';
import CreateRole from './CreateRole';
import { ListRoles } from './ListRoles';
import UpdateRole from './UpdateRole';


export function RoleIndex() {
    const [show, setShow] = useShow()

    return (
        <>
            {show === 0  &&
                <AdminContentLayout>
                    <HeaderContentLayout description="Roles">

                        <div className="space-x-2">
                            <AddButton onclick={() => setShow(1)} text="Add Role" />
                            <AddButton onclick={() => setShow(3)} text="Assign Role" />
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
                                <ListRoles setShow={setShow} />
                            </tbody>
                        </table>
                    </div>
                </AdminContentLayout>
            }
            {show === 1 && <CreateRole setShow={setShow} />}
            {show === 2 && <UpdateRole setShow={setShow} />}
            {show === 3 && <AssignRole setShow={setShow} />}
        </>
    )
}
