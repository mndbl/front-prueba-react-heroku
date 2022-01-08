import { useContext, useEffect, useState } from 'react'
import { CancelButton } from '../../../components/buttons/CancelButton'
import { SubmitButton } from '../../../components/buttons/SubmitButton'
import { AdminContentLayout } from '../../../components/layouts/AdminContentLayout'
import { HeaderContentLayout } from '../../../components/layouts/HeaderContentLayout'
import GlobalContext from '../../../context/globalStore/GlobalContext'
import { types } from '../../../context/globalStore/globalReducer'
import { Form } from '../../../components/forms/Form'
import { InputField } from '../../../components/forms/inputs/InputField'

export default function UpdateRole({ setShow }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [roleStore, dispatch] = useContext(GlobalContext);
    const { roleSel } = roleStore;
    useEffect(() => {
        if (roleSel) {
            setName(roleSel.name)
            setDescription(roleSel.description)
        }
    }, [roleSel])
    const handleUpdateRole = (e, roleSel) => {
        let { id } = roleSel
        e.preventDefault();
        let updateRole = {
            id,
            name,
            description
        }
        alert(updateRole)
        dispatch({ type: types.EDIT_ROLE, payload: updateRole })
        setShow(false)
    }
    return (
        <AdminContentLayout>
            <HeaderContentLayout description="Update Role" />
            <Form onSubmitForm={handleUpdateRole}>
                <InputField html_for="required-name" label_input="Name">
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="required-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="email" placeholder="Role name" />
                </InputField>

                <InputField html_for="required-description" label_input="Description">
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" id="" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="email" placeholder="Description" />
                </InputField>
                <div className="my-2 flex space-x-2">
                    <CancelButton text="Cancel" setShow={setShow} />
                    <SubmitButton text="Save" />
                </div>
            </Form>
        </AdminContentLayout>
    )
}
