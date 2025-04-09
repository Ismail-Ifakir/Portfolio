import React from "react";
import {FaPhone, FaTelegramPlane} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiLinkedinBoxFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-blue-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
          data-aos="fade-up" data-aos-duration="1000"

            href=""
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaPhone className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>+212681530755</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"
            href="https://wa.me/qr/YDSQ4ZZRAMMGP1"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.linkedin.com/in/ismail-ifakir-478837259/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiLinkedinBoxFill  className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
