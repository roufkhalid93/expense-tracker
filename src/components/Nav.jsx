//rrd imports
import { Form, NavLink } from "react-router-dom"

//library
import { TrashIcon } from "@heroicons/react/24/solid"

//assets
import logomark from "../assets/logomark.svg"


export default function Nav ({userName}) {
    return (
        <nav>
            {userName}
            <NavLink
                to="/"
                aria-label="Go to home"
            >
                <img src={logomark} alt="" height={30}/>
                <span>Expense Tracker</span>
            </NavLink>
            {
                userName && (
                    <Form
                        method="post"
                        action="/logout"
                        onSubmit={(event) => {
                            if(!confirm("Delete user and all data?"))
                            {event.preventDefault()}
                        }}
                        >
                            <button type="submit" className="btn btn--warning">
                                    <span>Delete User</span>
                                    <TrashIcon width={20}/>
                                </button>
                    </Form>
                )
            }
        </nav>
    )
}


// const Nav = ({userName}) => {
//     return (
//         <nav>
//             {userName}
//         </nav>
//     )
// }

// export default Nav