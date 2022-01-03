import { UserProvider } from "./user/UserProvider";
import { RoleProvider } from "./role/RoleProvider";

export function IndexProvider({ children }) {
    return (<UserProvider>
        <RoleProvider>
            {children}
        </RoleProvider>
    </UserProvider>)
}