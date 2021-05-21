import { NavLink } from 'react-router-dom';

const linkPolicy = <NavLink to="/">Private Policy</NavLink>;

function Footer() {
    return (
        <footer id="footer" class="footer">
            <div class="container">
                <div class="row">
                    <div class="grid_12">
                        <div class="ftr-brand">
                            <h2><a href="./">Victor Gama</a></h2>
                        </div>
                        <div class="info">
                            Copyright © <span id="copyright-year"></span> | {linkPolicy} | <a href="https://www.linkedin.com/in/vktrgama/"><img alt="LinkedIn" class="linkedin-logo" src="images/LI-Logo.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;