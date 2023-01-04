import {NavLink} from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <div>NotFound</div>
            <NavLink to="/" className="page-link">Return to home page</NavLink>
        </div>
    )
}