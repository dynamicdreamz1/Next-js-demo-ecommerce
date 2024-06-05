import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

const Footer = ({ footerItems }: any) => {
  return (
    <footer className="container mx-auto  text-[#666666] py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* First Column */}
        <div className="flex flex-col md:flex-row md:flex-wrap items-center">
          <div className="mb-4">
            <Image
              src={footerItems.icon}
              width={110}
              height={53}
              alt="Logo"
              className="m-4"
            />
            <div className="m-4 text-sm">{footerItems.description}</div>
          </div>
          <div className="flex space-x-2 m-4">
            {footerItems.social.map((data: any, index: any) => (
              <div
                key={index}
                className="border-2 flex items-center cursor-pointer p-2 border-[#DDDDDD] rounded-full hover:bg-[#FB7800] hover:text-[#1E1E1E] "
              >
                {/* //    align-center  */}
                <FontAwesomeIcon
                  icon={
                    data.icon === "faGithub"
                      ? faGithub
                      : data.icon === "faFacebookF"
                      ? faFacebookF
                      : data.icon === "faInstagram"
                      ? faInstagram
                      : data.icon === "faTwitter"
                      ? faTwitter
                      : null
                  }
                  className="icon"
                />
                {/* <Image src={data.icon} width={12} height={12} alt={data.title} className="w-6 h-6" /> */}
              </div>
            ))}
          </div>
        </div>
        {/* Second, Third, and Fourth Columns */}
        {footerItems.menus.map((data: any, index: any) => (
          <div
            key={index}
            className="flex flex-col lg:items-start items-center lg:pl-20 px-2"
          >
            <h2 className="font-bold text-[14px] mb-4 text-[#363636]">
              {data.menuTitle}
            </h2>

            <ul className="space-y-4 text-[14px] text-[#666666] flex flex-col lg:items-start items-center">
              {data.menus.map((data: any, index: any) => (
                <li key={index}>
                  <Link href={data.link} passHref>
                    <div className="hover:text-[#1E1E1E]">{data.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto h-[1px] my-10 bg-[#EAEAEA]"></div>
      <div className="text-center mt-8">
        <div className="text-[14px] leading-[22px] text-[#888888]">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
