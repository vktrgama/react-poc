import Splash from "../Header/Splash";
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Navigation from './nav';

const linkAbout = <NavLink to="/about">About</NavLink>;
const linkProjects = <NavLink to="/projects">Projects</NavLink>;

function Header() {
    const location = useLocation();
    let showSplash = location.pathname === "/" && <Splash />;

    return (
        <header id="header" class="header">
            {showSplash}
            <div id="stuck_container" class="stuck_container">
                <div class="container">
                    <div class="row">
                        <div class="grid_12">
                            <div class="hdr-brand">
                                <h1><a href="./">Full Stack Engineering</a></h1>
                            </div>
                            <Navigation />
                        </div>
                    </div>
                </div>
            </div>
      </header>
    );
  }

  export default Header;