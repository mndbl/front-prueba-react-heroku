import React from 'react'
import { HeaderContentLayout } from './HeaderContentLayout'

export function AdminContentLayout({ children, description, button }) {
    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="overflow-x-auto">
                <HeaderContentLayout description={description} button={button} />
                <div className="p-3">
                    {children}
                </div>
            </div>
        </div>
    )
}
