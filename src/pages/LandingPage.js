import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/user/UserContext';
import { types } from '../context/user/userReducer';

export function LandingPage() {
    const [userStore, dispatch] = useContext(UserContext);
    const { user } = userStore;
    const history = useHistory();
    const handleLogin = () => {
        dispatch({
            type: types.AUTH_LOGIN,
            payload: {
                username: 'José Mendible',
                accessToken: 'accessToken', 
                role: 1
            }
        })
        history.push('dashboard');
    }
    return (
        <div>
            <h1>Accede al sistema</h1>
            {!user.username ?
                <button className="px-4 py-2 border-2 border-blue-600" onClick={handleLogin}>login</button>
                :
                <button className="px-4 py-2 border-2 border-blue-600" onClick={() => dispatch({
                    type: types.AUTH_LOGOUT,
                })}>logout</button>
            }
        </div>
    )

}
