import { useNavigate, useLocation } from "react-router-dom";

import "./style.css"

export default function Header() {
    let { pathname } = useLocation()
    return (
        <header>
            {pathname !== "/"
                ? <GoBack />
                : ""}
            CINEFLEX
        </header>
    )
}

function GoBack() {
    let navigate = useNavigate()
    return (
        <svg
            onClick={() => navigate(-1)}
            viewBox="0 0 512 512">
            <path
                d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                strokeMiterlimit="10"
                strokeWidth="32"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M296 352l-96-96 96-96"
            />
        </svg>
    )
}

