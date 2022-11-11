import { NavLink } from 'react-router-dom';

function Splash() {
   const linkMoreInfo = <NavLink class="btn1" to="/about">more info</NavLink>;

    return (
      <div class="hdr-wrap">
         <div id="camera" class="camera_wrap">
            <div data-src="images/index_slide01.jpg">
               <div class="camera_caption fadeIn">
                     <h2 class="wow fadeInLeft" data-wow-delay=".4s">
                        Victor Gama
                     </h2>
                     <p class="wow fadeInRight" data-wow-delay=".8s">Staff Software Engineer</p>
                     <div class="wow fadeInUp" data-wow-delay="2s">
                        {linkMoreInfo}
                     </div>
               </div>
            </div>
            <div data-src="images/index_slide02.jpg">
               <div class="camera_caption fadeIn">
                     <h2 class="wow fadeInLeft" data-wow-delay=".4s">
                        Full Stack
                     </h2>
                     <p class="wow fadeInRight" data-wow-delay=".8s">Engineering</p>
                     <div class="wow fadeInUp" data-wow-delay="2s">
                        {linkMoreInfo}
                     </div>
               </div>
            </div>
         </div>

         <div class="logo">
            <embed src="images/logo.svg" />
         </div>
      </div>
    );
  }

  export default Splash;