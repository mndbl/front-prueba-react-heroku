import { Switch, Route } from 'react-router-dom'
import { AdminLayout } from '../../layouts/AdminLayout'
import { AssignRole } from './roles/AssignRole'
import { SettingsRole } from './roles/SettingsRole'


export function Settings() {
    return (
        <AdminLayout>
            <Switch>
                <Route path="/settings/assign-roles" component={AssignRole} />
                <Route path="/settings/roles" component={SettingsRole} />
            </Switch>
        </AdminLayout>
    )
}
