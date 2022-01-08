import React from 'react'
import { HeaderContentLayout } from './HeaderContentLayout'

export function AdminContentLayout({ children}) {
    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
           {children}
        </div>
    )
}
