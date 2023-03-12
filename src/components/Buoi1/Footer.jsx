import React from 'react'

export const Footer = () => {
  return (
    <div>
       <footer class="footer">
        <div class="footer-container">
            <div class="footer-container__info">
                <h3>ARSHA</h3>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p> 
                <p>United States</p> 
                <p><span>Phone:</span> +1 5589 55488 55</p>
                <p>
                    <span>Email:</span> info@example.com
                </p>
            </div>
            <div class="footer-container__links">
                <h4>Useful Links</h4>
                <ul>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">Services</a></li>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">Terms of service</a>
                    </li>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">Privacy policy</a>
                    </li>
                </ul>
            </div>
            <div class="footer-container__links">
                <h4>Our Services</h4>
                <ul>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">Web Design</a>
                    </li>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">Web Development</a>
                    </li>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">
                            Product Management</a></li>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">Marketing</a>
                    </li>
                    <li>
                        <i class="footer-icon fa-solid fa-chevron-right"></i>
                        <a href="#">Graphic Design</a>
                    </li>
                </ul>
            </div>
            <div class="footer-container__social">
                <h4>Our Social Networks</h4>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div class="social-links"> 
                    <a href="#" class="twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a> 
                    <a href="#" class="instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a> 
                    <a href="#" class="google-plus">
                        <i class="fa-brands fa-google"></i>
                    </a> 
                    <a href="#" class="linkedin">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-bottom__content">
                <div class="copyright"> 
                    <p>© Copyright 
                        <span>Arsha</span>. 
                        All Rights Reserved
                    </p>
                </div>
                <div class="credits">
                    <span>Designed by</span>  
                    <a href="">BootstrapMade</a>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
