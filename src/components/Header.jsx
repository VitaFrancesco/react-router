import { NavLink } from "react-router-dom"
import style from "./Header.module.css"

export default function Header() {
    return (
        <>
            <header>
                <nav className={style.nav}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/chi siamo">Chi siamo</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </nav>
            </header>
        </>
    )
}