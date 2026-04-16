import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav>
            <div id="nav-container">
                <ul id="nav-list">
                    <li><NavLink className="nav-component" to="/" style={({ isActive }) => ({ color: isActive ? '#83C5BE' : '#73877B' })}>Home</NavLink></li>
                    <li><NavLink className="nav-component" to="/about" style={({ isActive }) => ({ color: isActive ? '#83C5BE' : '#73877B' })}>About</NavLink></li>
                    <li><NavLink className="nav-component" to="/projects" style={({ isActive }) => ({ color: isActive ? '#83C5BE' : '#73877B' })}>Projects</NavLink></li>
                </ul>
                <div id="theme-bar" className={(theme === "Light") ? 'light-mode' : undefined}>
                {/* <div id="theme-bar"> */}
                    <p onClick={toggleTheme}>{theme === "Dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}</p>
                </div>
            </div>
        </nav>
    )
}