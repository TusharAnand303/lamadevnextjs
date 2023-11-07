import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoYoutube,
  BiLogoGoogle,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-3 mt-[100px]">
      <div className="text-lg font-semibold">&copy; Blogmania. All rights reserved.</div>
      <div className="flex justify-center items-center gap-5 text-3xl text-gray-600">
        <BiLogoFacebookCircle className="cursor-pointer" />
        <BiLogoInstagramAlt className="cursor-pointer" />
        <BiLogoYoutube className="cursor-pointer" />
        <BiLogoGoogle className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
