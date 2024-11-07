import * as React from 'react';
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
    FaDiscord,
} from "react-icons/fa6";

// import WlugImg from '/wlug.png';

const Footer = () => {
    return(
        <>
          <div id="about" className="footer w-full justify-center bottom-0 bg-[#000628] z-50  flex items-center">
            {/* <img src={FooterImg} className=" bg-blend-multiply"></img> */}
            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row bg-black border-[8px] border-purple-200 rounded-lg lg:justify-evenly justify-center p-6 items-center lg:px-12">
                
                <div className="space-y-2">
                    <a href="https://www.wcewlug.org/" target="_blank">
                        <img src="/wlug_white.png" className="lg:max-w-[13rem] w-full max-w-[12rem]"></img>
                    </a>
                    
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold text-white mb-2 text-center md:text-left">
                        Stay Tuned!
                    </h1>
                    <div className="flex space-x-2 justify-center md:justify-start">
                        <a
                            href="https://instagram.com/wcewlug?igshid=YmMyMTA2M2Y="
                            target="_blank"
                        >
                            <FaInstagram className="text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/wlug-club/"
                            target="_blank"
                        >
                            <FaLinkedin className="text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                        <a
                            href="https://github.com/Walchand-Linux-Users-Group"
                            target="_blank"
                        >
                            <FaGithub className="text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                        <a
                            href="https://mobile.twitter.com/wcewlug"
                            target="_blank"
                        >
                            <FaXTwitter className="text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                        <a
                            href="https://discord.com/invite/3ce8hBZfc8"
                            target="_blank"
                        >
                            <FaDiscord className="text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                    </div>
                    <p className="text-[14px] text-white">
                        © 2024 WCEWLUG, ALL RIGHTS RESERVED
                    </p>
                </div>
                <div className="space-y-2 text-white text-center lg:text-left">
                    <a href="https://www.wcewlug.org/" target="_blank">
                       Home
                    </a> <br/>
                    <a href="https://www.wcewlug.org/" target="_blank">
                       Register
                    </a> <br/>
                    <a href="https://www.wcewlug.org/" target="_blank">
                       About Us                    </a>                     
                </div>
                <div className="space-y-0 text-white text-center lg:text-left">
                    <a href="https://github.com/Walchand-Linux-Users-Group/gitbook/blob/wiki/policies/privacy-policy.md" target="_blank">
                    Privacy Policy
                    </a> <br/>
                    <a href="https://github.com/Walchand-Linux-Users-Group/gitbook/blob/wiki/policies/terms-and-conditions.md" target="_blank">
                    Terms and Conditions    
                    </a> <br/>
                    <a href="https://github.com/Walchand-Linux-Users-Group/gitbook/blob/wiki/policies/cancellation-refund-policy.md" target="_blank">
                    Cancellation/Refund Policy  
                    </a>                     
                </div>
                
                
            </div>
        </div>
        </>
    );
}

export default Footer;