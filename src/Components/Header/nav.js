
const Navigation = () => {
    return (
        <nav class="nav">
            <ul class="sf-menu">
                <li class="active">
                    <a href="./">Home</a>
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