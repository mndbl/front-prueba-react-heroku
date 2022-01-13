import { useContext, useState } from "react";
import GlobalContext from "../context/globalStore/GlobalContext";

const data_profile = { id: '', user_id: '', role_id: null, avatar: {} }



export function useProfiles() {
    const [storeProfile, dispatch] = useContext(GlobalContext)
    const { profiles, users, roles } = store;
    const [data, setData] = useState(data_profile);

    const handleAvatar = e => {
        e.preventDefault();
        setData({ ...data, avatar: e.target.files[0] });
    }
    const submitAddProfile = (e) => {
        e.preventDefault();

        dispatch({
            type: types.NEW_PROFILE,
            payload: newProfile
        })
        setShow(false)
    }

    return [
        data,
        storeProfile,
        setData,
        handleAvatar,
        submitAddProfile,
    ]
}
