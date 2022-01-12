import { useState } from "react";

export function useShow() {
    const [show, setShow] = useState(0);
    return [
        show,
        setShow
    ]
}
