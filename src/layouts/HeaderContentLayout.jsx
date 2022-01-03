import React from 'react'

export function HeaderContentLayout({ children, description, button }) {
    return (
        <header className="flex justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">{description}</h2>
            {button}
        </header>
    )
}
