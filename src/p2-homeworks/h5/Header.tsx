import React from 'react'
import {NavLink} from "react-router-dom";
import n from "./Header.module.css"

function Header() {
    return (
        <div className={n.dropdown}>
            <button className={n.dropbtn}>Level</button>
            <div className={n.dropdownContent}>
                <NavLink to='/Pre-junior'>Pre-junior</NavLink>
                <NavLink to='/Junior'>Junior</NavLink>
                <NavLink to='/Junior+'>Junior+</NavLink>

            </div>
        </div>
    )
}

export default Header
