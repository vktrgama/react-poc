import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const linkAbout = <NavLink to="/about">About</NavLink>;
    const linkProjects = <NavLink to="/projects">Projects</NavLink>;

    return (
        <nav class="nav">
            <ul class="sf-menu">
                <li class="active">
                    <a href="/">Home</a>
                </li>
                <li>
                    {linkAbout}
                    <ul>
                    <li><a href="#">More to come</a></li>
                    </ul> 
                    
                </li>
                <li>
                    {linkProjects}
                </li>
                <li>
                    <a href="#">Contact</a>
                    <ul>
                    <li><a href="#">vktrgama
                        @gmail.com</a></li>
                    </ul> 
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;