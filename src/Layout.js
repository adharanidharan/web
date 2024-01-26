import React from 'react'
import { Outlet , Link } from "react-router-dom"
import './Layout.css'
export default function Layout(){
    return (
      <div>
        <nav>
            <ul className="nav-bar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    <Outlet/>
      </div>
    )
}