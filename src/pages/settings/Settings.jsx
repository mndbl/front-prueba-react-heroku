import { Switch, Route } from 'react-router-dom'
import { GlobalProvider } from '../../context/globalStore/GlobalProvider'
import { AdminLayout } from '../../layouts/AdminLayout'
import ProfilesIndex from './profiles/ProfilesIndex'
import { RoleIndex } from './roles/RoleIndex'


export function Settings() {
    return (
        <GlobalProvider>
        <AdminLayout>
            <Switch>
                <Route path="/settings/profiles" component={ProfilesIndex} />
                <Route path="/settings/roles" component={RoleIndex} />
            </Switch>
        </AdminLayout>
        </GlobalProvider>
    )
}
