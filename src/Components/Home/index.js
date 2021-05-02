import Header from '../Header'
import Footer from '../Footer'

function Home() {
    return (
        <>
            <Header />
            <section id="content" class="content">
                <div class="container well__ins1 well__ins2">
                    <div class="row">
                        <div class="grid_12">
                            <h2 class="wow fadeInLeft">About Me</h2>
                            <h3 class="hdng wow fadeInRight">I have an extensive experience in the development of diverse software solutions for a variety of architectures and platforms, well familiar with Full-Stack frameworks and Object Oriented Programming over a variety of development methodologies, like Agile and Scrum.</h3>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="grid_12">
                            <h2 class="wow fadeInLeft">Ancestry.com</h2>
                            <h3> current job</h3>
                        </div>
                    </div>
                </div>
                <div class="container well well__ins3">
                    <div class="row">
                        <div class="grid_3 wow fadeInUp" data-wow-delay=".2s">
                            <div class="box center">
                                <div class="tm-spanner"></div>
                                <h4><a href="#">Development</a></h4>
                                <p>
                                Build and deploy engaging applications for Ancestry customers exploring their Ethnicity and Health via DNA analysis, as well as Historical records, implementing the latest full stack frameworks available, including: NodeJs, React, Redux, Jest, Mocha, WebPack, Jenkins, Docker, Kubernetes, AWS, and GitHub.
                                </p>
                            </div>
                        </div>
                        <div class="grid_3 wow fadeInUp" data-wow-delay=".4s">
                            <div class="box center">
                                <div class="tm-gear"></div>
                                <h4><a href="#">Services</a></h4>
                                <p>
                                Build and deploy secure backend RESTful services in Spring Boot.
                                </p>
                            </div>
                        </div>
                        <div class="grid_3 wow fadeInUp" data-wow-delay=".6s">
                            <div class="box center">
                                <div class="tm-user"></div>
                                <h4><a href="#">Agile</a></h4>
                                <p>
                                As a Scrum Master I worked with other teams to ensure dependencies are in sync, and worked with Product Managers to define a clear scope of priorities, lead my team to deliver features under tight deadlines.
                                </p>
                            </div>
                        </div>
                        <div class="grid_3 wow fadeInUp" data-wow-delay=".8s">
                            <div class="box center">
                                <div class="tm-check"></div>
                                <h4><a href="#">Production</a></h4>
                                <p>
                                Delivered 3 major products in the last 2 years for Ancestry DNA and Ancestry Health domains.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>        
    );
  }

  export default Home;