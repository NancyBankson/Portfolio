import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <nav>
            <div id="nav-container">
                <ul id="nav-list">
                    <li><NavLink className="nav-component" to="/" style={({ isActive }) => ({ color: isActive ? '#83C5BE' : '#73877B' })}>Home</NavLink></li>
                    <li><NavLink className="nav-component" to="/about" style={({ isActive }) => ({ color: isActive ? '#83C5BE' : '#73877B' })}>About</NavLink></li>
                    <li><NavLink className="nav-component" to="/projects" style={({ isActive }) => ({ color: isActive ? '#83C5BE' : '#73877B' })}>Projects</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}