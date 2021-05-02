import Splash from "../Header/Splash";
import { useLocation } from 'react-router-dom';

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
                            <nav class="nav">
                                <ul class="sf-menu">
                                    <li class="active">
                                        <a href="./">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about">About</a>
                                        <ul>
                                        <li><a href="#">coming soon</a></li>
                                        </ul> 
                                        
                                    </li>
                                    <li>
                                        <a href="/projects">Projects</a>
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
                        </div>
                    </div>
                </div>
            </div>
      </header>
    );
  }

  export default Header;