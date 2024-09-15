import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Button from "../reuse-component/Button";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  const [index, setIndex] = useState<number[]>([-1]);
  const structuredContent = [
    {
      parentHeading: "Print on demand",
      childHeadings: [
        "What is print on demand?",
        "Product catalog",
        "Shipping and delivery",
        "Dropshipping products",
        "Pro sellers",
        "White label products",
        "Returns policy",
        "Global, yet local",
        "Sustainability",
        "support",
      ],
    },
    {
      parentHeading: "Integrations",
      childHeadings: [
        "Shopify",
        "Etsy",
        "WooCommerce",
        "Wix",
        "Squarespace",
        "BigCommerce",
        "API",
      ],
    },
    {
      parentHeading: "Support",
      childHeadings: [
        "Integrations",
        "Shopify",
        "Etsy",
        "WooCommerce",
        "Wix",
        "Squarespace",
        "BigCommerce",
        "API",
      ],
    },
    {
      parentHeading: "Start selling",
      childHeadings: [
        "Embroidery",
        "Print on demand t-shirts",
        "Print on demand hoodies",
        "Print on demand posters",
        "Print on demand canvas",
        "Print on demand calendars",
        "Print on demand mugs",
        "Custom products",
        "Custom clothing",
        "Custom merchandise",
        "Custom phone cases",
        "Print on demand Europe",
        "Print on demand UK",
        "Print on demand France",
        "Print on demand Canada",
        "Merch maker",
      ],
    },
    {
      parentHeading: "Company",
      childHeadings: [
        "GelatoConnect",
        "About Gelato",
        "Leadership team",
        "Board & investors",
        "Newsroom",
        "Blog",
        "Customer Stories",
        "Partners",
        "Careers",
        "Affiliates program",
      ],
    },
  ];

  const languageOpt = [
    "English",
    "English (Canada)",
    "English (United Kingdom)",
    "English (United India)",
    "Francais",
    "Italiano",
    "Dansk",
  ];

  const toggleParentHading = (headingIndex: number) => {
    if (index?.includes(headingIndex)) {
      return setIndex((prev) => prev?.filter((pr) => pr !== headingIndex));
    }
    return setIndex((prev) => [...prev, headingIndex]);
  };

  return (
    <React.Fragment>
      <div className="w-full max-lg:hidden bg-black h-fit px-20 py-10">
        <div className="w-full flex">
          <div className="w-[50%] text-white">
            <img
              src="/img/white_logo.svg"
              className="w-fit  h-[40px]  object-cover"
              alt="logo"
            />
          </div>
          <div className="w-[50%] flex items-center gap-4">
            <div>
              <p className="text-white text-[24px]">Find Gelato On :</p>
            </div>
            <div>
              <FaInstagram
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
            <div>
              <FaFacebook
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
            <div>
              <FaTiktok
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
            <div>
              <FaLinkedin
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
            <div>
              <FaYoutube
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 pt-14">
          <div className="w-[350px] flex flex-col ">
            <p className="text-white text-[14px] pt-10">
              Gelato has created the world's largest network for local
              production and distribution of customized products. Together we
              bring creativity to life - and into business.
            </p>
            <div className="rounded-full py-4 w-fit">
              <Button isIcon={false} isBgBlack={false} btnName="Get Started" />
            </div>
            <div className="w-full flex flex-col gap-4 ">
              <div className=" text-white">Get the app</div>
              <div className="flex items-center gap-2">
                <div>
                  <img
                    src="/img/badge-1.svg"
                    className="w-fit rounded overflow-hidden h-[50px] object-contain"
                    alt="apple.svg"
                  />
                </div>
                <div>
                  <img
                    src="/img/badge.svg"
                    className="w-fit rounded overflow-hidden h-[50px] object-contain"
                    alt="apple.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          {structuredContent?.map((st, i) => (
            <div key={i} className="w-[150px] flex flex-col gap-4">
              <p className="text-white text-[18px]"> {st?.parentHeading} </p>

              {st?.childHeadings?.map((ch, index) => (
                <p key={index} className="text-white text-[13px]">
                  {ch}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-24 flex justify-between">
          <div className="flex gap-4">
            <a className="text-white text-[16px] " href="">
              Contact us |
            </a>
            <a className="text-white text-[16px] " href="">
              Legal |
            </a>
            <a className="text-white text-[16px] " href="">
              Privacy Policy |
            </a>
            <a className="text-white text-[16px] " href="">
              Cookie Policy |
            </a>
            <a className="text-white text-[16px] " href="">
              Api terms |
            </a>
            <a className="text-white text-[16px] " href="">
              Sitemap
            </a>
          </div>
          <div>
            <select
              className="w-[200px] h-[40px]  border bg-black text-white border-white rounded"
              name=""
              id=""
            >
              {languageOpt?.map((lang, i) => (
                <option className="px-4" key={i} value="">
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* responsive  */}

      <div className="w-full hidden max-lg:flex flex-col gap-4 bg-black px-20 max-sm:px-10 py-10">
        <div className="w-full">
          <img
            src="/img/white_logo.svg"
            className="w-fit  h-[40px]  object-cover"
            alt="logo"
          />
        </div>
        <p className="text-white text-[14px] pt-10">
          Gelato has created the world's largest network for local production
          and distribution of customized products. Together we bring creativity
          to life - and into business.
        </p>
        <div className="rounded-full py-4 w-fit">
          <Button isIcon={false} isBgBlack={false} btnName="Get Started" />
        </div>
        <div className="w-full flex flex-col gap-4 ">
          <div className=" text-white">Get the app</div>
          <div className="flex items-center gap-2">
            <div>
              <img
                src="/img/badge-1.svg"
                className="w-fit rounded overflow-hidden h-[50px] object-contain"
                alt="apple.svg"
              />
            </div>
            <div>
              <img
                src="/img/badge.svg"
                className="w-fit rounded overflow-hidden h-[50px] object-contain"
                alt="apple.svg"
              />
            </div>
          </div>
        </div>
        {structuredContent?.map((st, i) => (
          <div key={i} className="w-[200px] flex flex-col justify-start gap-2">
            <div onClick={() => toggleParentHading(i)} className="flex gap-2">
              {index?.includes(i) ? (
                <IoIosArrowDown color="white" fontSize={22} />
              ) : (
                <IoIosArrowForward color="white" fontSize={22} />
              )}
              <p className="text-white text-[18px]"> {st?.parentHeading} </p>
            </div>

            <div
              className={`${
                index?.includes(i) ? "h-fit" : "h-0 overflow-hidden"
              }  flex flex-col justify-start gap-4`}
            >
              {st?.childHeadings?.map((ch, index) => (
                <p key={index} className="text-white pl-10 text-[13px]">
                  {ch}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div className="w-full flex flex-col  gap-4">
          <div>
            <p className="text-white text-[24px]">Find Gelato On :</p>
          </div>
          <div className="w-full flex justify-evenly items-center">
            <div>
              <FaInstagram
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
            <div>
              <FaFacebook
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
            <div>
              <FaTiktok
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
            <div>
              <FaLinkedin
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
            <div>
              <FaYoutube
                className="cursor-pointer"
                color="white"
                fontSize={24}
              />
            </div>
          </div>

          <div className="flex flex-col pt-10 gap-10">
            <a className="text-white text-[16px] " href="">
              Contact us
            </a>
            <a className="text-white text-[16px] " href="">
              Legal
            </a>
            <a className="text-white text-[16px] " href="">
              Privacy Policy
            </a>
            <a className="text-white text-[16px] " href="">
              Cookie Policy
            </a>
            <a className="text-white text-[16px] " href="">
              Api terms
            </a>
            <a className="text-white text-[16px] " href="">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
