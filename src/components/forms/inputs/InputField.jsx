import React from 'react'

export function InputField({children, label_input, html_for}) {
    return (
        <div className=" relative ">
                    <label htmlFor={html_for} className="text-gray-600">
                        {label_input}
                        <span className="text-red-500 required-dot">
                            *
                        </span>
                    </label>
                    {children}
                </div>
    )
}
