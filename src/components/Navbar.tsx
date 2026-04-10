import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <nav>
            <div id="nav-container">
                <ul>
                    <li><NavLink to="/home" style={({ isActive }) => ({ color: isActive ? '#73877B' : 'white', })}>Home</NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#73877B' : 'hsl(200, 15%, 8%)', })}>About</NavLink></li>
                    <li><NavLink to="/projects" style={({ isActive }) => ({ color: isActive ? '#73877B' : 'hsl(200, 15%, 8%)', })}>Projects</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}