import React from 'react'
import aboutImg from '../../assests/img/hero.png';
function Contact() {
  return (
  <>
         <div className="about_content_wrapper d-flex gap-5">
          <div className="about_img w-25">
            <img src={aboutImg} alt="aboutImg" className="w-100" />
          </div>
          <div className="about_content w-75">
            <h2>I'm Ruslan Pachkov</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur bus praeseeligendi ab omnis
              exercitationem.
            </p>
          </div>
          <div className="social_links">
            <h6 className="mb-3">Connect with me:</h6>
            <span>
              <a href="/#">
                <i class="ri-telegram-line"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-linkedin-fill"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-facebook-fill"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-mail-line"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-github-line"></i>
              </a>
            </span>
          </div>
        </div>
     
      </>
  )
}

export default Contact