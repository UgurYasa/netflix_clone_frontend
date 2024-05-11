import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col max-sm:p-1 p-5 bg-black w-full border-b-2 items-start md:px-16">
      <div className="flex flex-row items-center gap-x-2 w-full max-md:px-6">
        <p className="text-white tex-base"> AnaSayfa</p>
        <p className="text-white">|</p>
        <p className="text-white">Kullanıcı Çözmesi</p>
        <p className="text-white">|</p>
        <p className="text-white">Gizlilik Sözleşmesi</p>
      </div>
      <div className="flex flex-row items-center p-2 gap-x-2 max-md:px-6">
        <TiSocialFacebook className="text-white text-2xl" />
        <FaTwitter className="text-white text-2xl" />
      </div>
    </div>
  );
}
