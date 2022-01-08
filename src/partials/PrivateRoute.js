import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../context/user/UserContext";

export function PrivateRoute({ children, ...rest }) {
    const [state] = useContext(UserContext);
    const {user}=state;
    const username = localStorage.getItem('username');
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                username ? (
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