import { now } from 'moment'
import { useContext, useState } from 'react'
import { CancelButton } from '../../../components/CancelButton'
import { SubmitButton } from '../../../components/SubmitButton'
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
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="flex justify-between px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-500">Add New Role</h2>
            </header>
            <div className="p-3">
                <form className="max-w-md mx-auto py-4" onSubmit={handleAddRole}>

                    <div className=" relative ">
                        <label htmlFor="required-name" className="text-gray-600">
                            Name
                            <span className="text-red-500 required-dot">
                                *
                            </span>
                        </label>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="required-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="email" placeholder="Role name" />
                    </div>
                    <div className=" relative ">
                        <label htmlFor="required-description" className="text-gray-600">
                            Description
                            <span className="text-red-500 required-dot">
                                *
                            </span>
                        </label>
                        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" id="required-description" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="email" placeholder="Description" />
                    </div>
                    <div className="my-2 flex space-x-2">
                        <CancelButton text="Cancel" setShow={setShow} />
                        <SubmitButton text="Save" />
                    </div>
                </form>
            </div>
        </div>
    )
}
