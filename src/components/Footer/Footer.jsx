import React from "react";
import footerLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white mb-20 bg-gradient-to-r from-[#2e4d58] to-[#1b805b]">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} className="max-w-[50px]" alt="" />
              BuyBest
            </h1>
            <p>
              BuyBest is your ultimate online fashion destination, bringing you the latest trends, timeless styles, and everyday essentials — all in one place. Whether you're looking for chic streetwear, elegant formalwear, or comfortable casuals, BuyBest offers a curated collection for men, women, and kids. 
            </p>
          </div>
          {/* footer links details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            
            <div>
              <div className="py-8 px-10 ">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social links */}
            <div className="mx-30">
              <div className="flex items-center gap-5 mt-6">
                <a href="">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                 <div className="flex items-center gap-3">
                    <FaLocationArrow/>
                    <p>Legaspi, Fibs</p>
                 </div>
                 <div className="flex items-center gap-3">
                    <FaMobileAlt/>
                    <p>0925 345 097</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
