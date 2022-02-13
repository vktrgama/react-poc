import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const linkHome = <NavLink to="/">Home</NavLink>;
    const linkAbout = <NavLink to="/about">About</NavLink>;
    const linkProjects = <NavLink to="/projects">Projects</NavLink>;

    return (
        <nav class="nav">
            <ul class="sf-menu">
                <li>
                    {linkHome}
                </li>
                <li>
                    {linkAbout}
                </li>
                <li>
                    {linkProjects}
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/vktrgama/" target='_new'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;