import Link from "next/link"

export function NavLink({children}) {
    return(
        <Link className="hover:text-slate-600" href="#">{children}</Link>
    )
}