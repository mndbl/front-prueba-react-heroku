import { createPortal } from 'react-dom'

function PortalModal({ children }) {
    return createPortal(
        <>
            {children}
        </>,
        document.getElementById('modals'))
}


export const Modal = ({ children, show, setShow }) => {
    return (
        <PortalModal>
            <div>
                {show && <div className="py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                    {children}
                </div>}
            </div>
        </PortalModal>
    )
}