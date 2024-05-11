import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  //SOcial Media Urls
  const facebookUrl = "https://www.facebook.com";
  const twitterUrl = "https://www.twitter.com";
  return (
    <div className="flex flex-col max-sm:p-1 p-5 bg-black w-full border-b-2 items-start md:px-16">
      {/* Footer Links*/}
      <div className="flex flex-row items-center gap-x-2 w-full max-md:px-6">
        <Link to={"/"} className="text-white tex-base">
          {" "}
          AnaSayfa
        </Link>
        <p className="text-white">|</p>
        <Link to={"/kullanici-sozlesmesi"} className="text-white">
          Kullanıcı Çözmesi
        </Link>
        <p className="text-white">|</p>
        <Link to={"/gizlilik-sozlesmesi"} className="text-white">
          Gizlilik Sözleşmesi
        </Link>
      </div>
      {/* Social Media Icons */}
      <div className="flex flex-row items-center p-2 gap-x-2 max-md:px-6">
        <a href={facebookUrl} target="_blank">
          <TiSocialFacebook className="text-white text-2xl" />
        </a>
        <a href={twitterUrl} target="_blank">
          <FaTwitter className="text-white text-2xl" />
        </a>
      </div>
    </div>
  );
}
