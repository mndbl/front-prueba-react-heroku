import React from 'react'

export function Form({ children, onSubmitForm }) {
    return (
        <div className="p-3">
            <form className="max-w-md mx-auto py-4" onSubmit={onSubmitForm}>
                {children}
            </form>
        </div>

    )
}
