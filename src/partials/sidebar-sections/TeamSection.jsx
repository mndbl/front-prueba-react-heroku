import React from 'react'
import { NavLink } from 'react-router-dom';

export default function TeamSection({ handleClick, open, pathname, sidebarExpanded, setSidebarExpanded }) {
    return (
        <React.Fragment>
            <a href="#0" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('team') && 'hover:text-gray-200'}`} onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true) }}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                            <path className={`fill-current text-gray-600 ${pathname.includes('team') && 'text-indigo-500'}`} d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                            <path className={`fill-current text-gray-400 ${pathname.includes('team') && 'text-indigo-300'}`} d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                        </svg>
                        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Team</span>
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
                        <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Team - Tabs</span>
                        </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Team - Tiles</span>
                        </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                        <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
