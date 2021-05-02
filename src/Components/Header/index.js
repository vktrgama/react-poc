function Header() {
    return (
        <header id="header" class="header">
            <div class="hdr-wrap">
                <div id="camera" class="camera-wrap">
                    <div data-src="images/index_slide01.jpg">
                        <div class="camera_caption fadeIn">
                            <h2 class="wow fadeInLeft" data-wow-delay=".4s">
                                Victor Gama
                            </h2>
                            <p class="wow fadeInRight" data-wow-delay=".8s">Staff Engineer</p>
                            <div class="wow fadeInUp" data-wow-delay="2s">
                                <a class="btn1" href="#">more info</a>
                            </div>
                        </div>
                    </div>
                    <div data-src="images/index_slide02.jpg">
                        <div class="camera_caption fadeIn">
                            <h2 class="wow fadeInLeft" data-wow-delay=".4s">
                                Career Experience
                            </h2>
                            <p class="wow fadeInRight" data-wow-delay=".8s">Full Stack Engineering</p>
                            <div class="wow fadeInUp" data-wow-delay="2s">
                                <a class="btn1" href="#">more info</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="logo">
                    <embed src="images/logo.svg" />
                </div>
            </div>

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
                                        <a href="/movies">Projects</a>
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