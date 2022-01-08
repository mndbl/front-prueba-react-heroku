import { now } from 'moment'
import { useContext, useState } from 'react'
import { CancelButton } from '../../../components/buttons/CancelButton'
import { SubmitButton } from '../../../components/buttons/SubmitButton'
import { Form } from '../../../components/forms/Form'
import { InputField } from '../../../components/forms/inputs/InputField'
import { AdminContentLayout } from '../../../components/layouts/AdminContentLayout'
import { HeaderContentLayout } from '../../../components/layouts/HeaderContentLayout'
import GlobalContext from '../../../context/globalStore/GlobalContext'
import { types } from '../../../context/globalStore/globalReducer'


export default function CreateRole({ setShow }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [, dispatch] = useContext(GlobalContext);

    const handleAddRole = (e) => {
        e.preventDefault();
        let newRole = {
            id: now(),
            name,
            description
        }

        dispatch({ type: types.NEW_ROLE, payload: newRole })
        setShow(false);
    }
    return (
        <AdminContentLayout>
            <HeaderContentLayout description="Add New Role" />
            <Form onSubmitForm={handleAddRole}>
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
