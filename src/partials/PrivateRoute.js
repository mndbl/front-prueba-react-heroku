import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../context/user/UserContext";

export function PrivateRoute({ children, ...rest }) {
    const [store] = useContext(UserContext);
    const { user } = store;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.username ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}