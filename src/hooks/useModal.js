import { useState } from 'react';

export function useModal() {
    const [show, setShow] = useState(true);

    return [
        show,
        setShow,
    ]
}
