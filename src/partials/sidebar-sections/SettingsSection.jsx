import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SettingsSection({ handleClick, open, pathname, sidebarExpanded, setSidebarExpanded }) {
    return (
        <React.Fragment>
            <a href="#0" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('settings') && 'hover:text-gray-200'}`} onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true) }}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                            <path className={`fill-current text-gray-600 ${pathname.includes('settings') && 'text-indigo-500'}`} d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                            <path className={`fill-current text-gray-400 ${pathname.includes('settings') && 'text-indigo-300'}`} d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                            <path className={`fill-current text-gray-600 ${pathname.includes('settings') && 'text-indigo-500'}`} d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                            <path className={`fill-current text-gray-400 ${pathname.includes('settings') && 'text-indigo-300'}`} d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                        </svg>
                        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Settings</span>
                    </div>
                    {/* Icon */}
                    <div className="flex shrink-0 ml-2">
                        <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && 'transform rotate-180'}`} viewBox="0 0 12 12">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                    </div>
                </div>
            </a>
            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/settings/roles" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Roles</span>
                        </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/settings/profiles" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Profiles</span>
                        </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">My Account</span>
                        </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">My Notifications</span>
                        </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Connected Apps</span>
                        </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Plans</span>
                        </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Billing & Invoices</span>
                        </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Give Feedback</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
