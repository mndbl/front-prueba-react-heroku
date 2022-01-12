import { CancelButton } from '../../../components/buttons/CancelButton'
import { SubmitButton } from '../../../components/buttons/SubmitButton'
import { AdminContentLayout } from '../../../components/layouts/AdminContentLayout'
import { HeaderContentLayout } from '../../../components/layouts/HeaderContentLayout'
import { Form } from '../../../components/forms/Form'
import { InputField } from '../../../components/forms/inputs/InputField'
import { useRoles } from '../../../hooks/useRoles'
import { inputStyles } from '../../../css/tailwindStyles'

export default function UpdateRole({ setShow }) {
    const { name, setName, description, setDescription, roleSel, handleUpdateRole } = useRoles(setShow)
    return (
        <AdminContentLayout>
            <HeaderContentLayout description="Update Role" />
            <Form onSubmitForm={(e) => handleUpdateRole(e,roleSel)}>
                <InputField html_for="required-name" label_input="Name">
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="required-name" className={inputStyles} name="email" placeholder="Role name" />
                </InputField>

                <InputField html_for="required-description" label_input="Description">
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" id="" className={inputStyles} name="email" placeholder="Description" />
                </InputField>
                <div className="my-2 flex space-x-2">
                    <CancelButton text="Cancel" setShow={setShow} />
                    <SubmitButton text="Save" />
                </div>
            </Form>
        </AdminContentLayout>
    )
}
