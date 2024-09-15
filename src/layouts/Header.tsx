import React, { useState } from "react";
import { CiCircleAlert } from "react-icons/ci";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoHeadsetSharp } from "react-icons/io5";
import Button from "../reuse-component/Button";
import { MdMenu, MdOutlineLanguage } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Header = ({ isSticky }: { isSticky: boolean }) => {
  const [headerBarNavigationArray] = useState<
    {
      parentHeading: string;
      isArrow: boolean;
      childHeading: Array<{ name: string; isArrow: boolean }>;
    }[]
  >([
    {
      parentHeading: "Products",
      isArrow: true,
      childHeading: [
        { name: "Men Clothing", isArrow: true },
        { name: "Women Clothing", isArrow: true },
        { name: "Kids & Baby Clothing", isArrow: true },
        { name: "Tote Bags", isArrow: true },
        { name: "Wall Art", isArrow: true },
        { name: "Calenders", isArrow: false },
        { name: "Cards", isArrow: false },
        { name: "Photo Books", isArrow: true },
        { name: "Hats", isArrow: true },
        { name: "Phone Cases", isArrow: false },
        { name: "Mugs & Bottle", isArrow: false },
        { name: "Stationary & Business", isArrow: false },
      ],
    },
    {
      parentHeading: "Start Selling",
      isArrow: true,
      childHeading: [
        { name: "Print On Demand", isArrow: false },
        { name: "Setup Your Business", isArrow: true },
        { name: "Sell Custom Products", isArrow: true },
        { name: "Integrations", isArrow: true },
        { name: "Partner Services", isArrow: false },
      ],
    },
    {
      parentHeading: "Pricing",
      isArrow: true,
      childHeading: [
        { name: "Payments and pricing", isArrow: false },
        { name: "Subscription and Plans", isArrow: false },
        { name: "Gelato +", isArrow: false },
        { name: "Platinum", isArrow: false },
        { name: "Offers", isArrow: false },
      ],
    },
    {
      parentHeading: "Resources",
      isArrow: true,
      childHeading: [
        { name: "Resources Center", isArrow: false },
        { name: "Gelato Academy", isArrow: false },
        { name: "Customer Stories", isArrow: false },
        { name: "Blogs", isArrow: true },
        { name: "Whitepapers", isArrow: true },
        { name: "Newsroom", isArrow: true },
        { name: "Sustainability", isArrow: true },
        { name: "Help Center", isArrow: false },
      ],
    },
    {
      parentHeading: "Pro Sellers",
      isArrow: false,
      childHeading: [],
    },
    {
      parentHeading: "GelatoConnect",
      isArrow: true,
      childHeading: [
        { name: "Logistic", isArrow: false },
        { name: "Workflow", isArrow: false },
        { name: "Procurement", isArrow: false },
      ],
    },
  ]);

  const [headerBarIndex, setHeaderBarIndex] = useState<number>(-1);
  const [openLangModal, setOpenLangModal] = useState<boolean>(false);
  const [openSideNavBar, setOpenSideNav] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div className="bg-black w-full h-[50px] max-sm:h-fit max-sm:p-2  gap-2 flex items-center justify-center">
        <p className="text-white text-center underline">
          FREE SHIPPING for orders over $300. Order today
        </p>
        <CiCircleAlert color="white" fontSize={24} />
      </div>
      <div
        className={`bg-white flex flex-col w-full h-fit ${
          isSticky ? "sticky top-[-5px] z-50" : ""
        }`}
      >
        <div className="h-[65px] border shadow-md grid grid-cols-12">
          <div className="col-span-5 max-2xl:col-span-3 max-lg:col-span-6 pl-24 max-lg:pl-14 max-sm:pl-0 flex gap-4 max-sm:gap-0 max-sm:justify-evenly items-center ">
            <MdMenu
              color="black"
              onClick={() => setOpenSideNav(true)}
              fontSize={24}
              className="block lg:hidden "
            />
            <img
              src="/img/gelato_logo_black.svg"
              className="w-fit  h-[30px]  max-sm:h-[22px] object-cover"
              alt="logo"
            />
          </div>
          <div className="col-span-7 max-2xl:col-span-9 max-lg:col-span-6 pl-24 max-lg:pl-0  flex items-center justify-start max-md:justify-center gap-4 max-md:gap-2">
            <Button
              iconName={<IoHeadsetSharp color="black" fontSize={18} />}
              isIcon={true}
              isBgBlack={false}
              className="max-lg:hidden"
              btnName="Contact us"
            />
            {openLangModal ? (
              <div
                onClick={() => setOpenLangModal(false)}
                className="fixed w-full z-10 bg-black left-0 top-0 bg-opacity-25 h-[100vh]"
              ></div>
            ) : null}
            <div
              onClick={() => setOpenLangModal(!openLangModal)}
              className="flex max-md:hidden bg-white cursor-pointer hover:bg-gray-300 rounded-full transition-all duration-150 p-2 px-3 gap-2 items-center z-20 relative justify-center"
            >
              <div className="flex gap-2 items-center justify-center">
                <MdOutlineLanguage color="black" fontSize={18} />
                <p>IN / INR</p>
                <IoIosArrowDown color="black" fontSize={18} />
              </div>
              {openLangModal ? (
                <>
                  <div className="w-0 h-0  border-l-[10px] border-l-transparent border-b-[10px] border-b-white border-r-[10px] border-r-transparent absolute left-[50px] top-10 z-20"></div>
                  <div className="absolute top-12 bg-white rounded-md border">
                    <div className="hover:bg-gray-100 p-3 items-center gap-2">
                      <span>Language - IN</span>
                    </div>
                    <div className="hover:bg-gray-100 p-3 items-center gap-2">
                      <span>Currency - INR</span>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <Button
              iconName={<FaShoppingCart color="black" fontSize={18} />}
              isIcon={true}
              isBgBlack={false}
              btnName="Cart"
              className="max-md:hidden"
            />
            <Button
              iconName={<FaUser color="black" fontSize={18} />}
              isIcon={true}
              isBgBlack={false}
              btnName="Sign in"
              className="max-lg:hidden"
            />
            <Button
              isIcon={false}
              isBgBlack={true}
              btnName="Sign up for free"
            />
          </div>
        </div>
        {/* header bar navigation array */}
        <div className="w-full px-24 hidden lg:flex h-[50px] shadow-sm">
          {headerBarIndex > -1 ? (
            <div className={`fixed w-full bg-black left-0 ${isSticky ? 'top-[15%]':'top-[23%]'}  bg-opacity-25 h-[85vh]`}></div>
          ) : null}

          {headerBarNavigationArray?.map((sd, i) => (
            <div
              key={i}
              onMouseEnter={() => setHeaderBarIndex(i)}
              onMouseLeave={() => setHeaderBarIndex(-1)}
              className="cursor-pointer hover:bg-gray-100 w-fit px-2 flex justify-center items-center gap-2 h-full"
            >
              <span> {sd?.parentHeading} </span>
              {sd?.isArrow ? (
                <div className="relative">
                  <span>
                    <IoIosArrowDown
                      className={`${
                        i === headerBarIndex
                          ? "-rotate-180 transition-all duration-300"
                          : "-rotate-0 transition-all duration-300"
                      }`}
                      color="black"
                      fontSize={16}
                    />
                  </span>
                  {i === headerBarIndex ? (
                    <React.Fragment>
                      <div className="w-0 h-0  border-l-[10px] border-l-transparent border-b-[10px] border-b-white border-r-[10px] border-r-transparent absolute left-[-50px] top-6 z-20"></div>
                      <div className="absolute left-[-100px] top-8 flex flex-col gap-2 h-fit w-[250px] bg-white border z-10 ">
                        {sd?.childHeading?.map((ch, index) => (
                          <div
                            className="flex justify-between hover:bg-gray-100 p-3 items-center gap-2"
                            key={index}
                          >
                            <span>{ch?.name}</span>
                            {ch?.isArrow ? (
                              <span>
                                <IoIosArrowForward
                                  color="black"
                                  fontSize={16}
                                />
                              </span>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </React.Fragment>
                  ) : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      {/* responsive  */}
      {openSideNavBar ? (
        <div className="fixed w-full h-[100vh] top-0 left-0 bg-black bg-opacity-25 z-10"></div>
      ) : null}
      <div
        className={`fixed w-[300px] h-[100vh] overflow-y-scroll flex flex-col bg-white top-0 ${
          openSideNavBar
            ? "transition-all duration-300 left-0"
            : "transition-all duration-300 left-[-100%]"
        }   z-20`}
      >
        <div className="flex border border-b-2 justify-evenly items-center px-2">
          <button className="p-4">
            <RxCross2
              color="black"
              fontSize={24}
              onClick={() => setOpenSideNav(false)}
            />
          </button>

          <div
            onClick={() => setOpenLangModal(!openLangModal)}
            className="flex bg-white cursor-pointer hover:bg-gray-300 rounded-full transition-all duration-150 p-2 px-3 gap-2 items-center z-20 relative justify-center"
          >
            {openLangModal ? (
              <div
                onClick={() => setOpenLangModal(false)}
                className="fixed w-full z-[20] bg-black left-0 top-0 bg-opacity-25 h-[100vh]"
              ></div>
            ) : null}
            <div className="flex gap-2 items-center justify-center">
              <MdOutlineLanguage color="black" fontSize={18} />
              <p>IN / INR</p>
              <IoIosArrowDown color="black" fontSize={18} />
            </div>
            {openLangModal ? (
              <>
                <div className="w-0 h-0  border-l-[10px] border-l-transparent border-b-[10px] border-b-white border-r-[10px] border-r-transparent absolute left-[50px] top-10 z-[30]"></div>
                <div className="absolute top-12 bg-white z-[30] rounded-md border">
                  <div className="hover:bg-gray-100 p-3 items-center gap-2">
                    <span>Language - IN</span>
                  </div>
                  <div className="hover:bg-gray-100 p-3 items-center gap-2">
                    <span>Currency - INR</span>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          <div className="bg-gray-200 w-[2px] h-[35px]"></div>
          <Button
            iconName={<FaShoppingCart color="black" fontSize={18} />}
            isIcon={true}
            isBgBlack={false}
            btnName="Cart"
          />
        </div>
        <div className="flex border border-b-2 justify-evenly items-center px-2 py-4">
          <Button isIcon={false} isBgBlack={true} btnName="Sign up for free" />
          <div className="bg-gray-200 w-[2px] h-[35px]"></div>
          <Button
            iconName={<FaUser color="black" fontSize={18} />}
            isIcon={true}
            isBgBlack={false}
            btnName="Sign in"
          />
        </div>
        <div className="w-full   hidden max-lg:flex flex-col  h-fit">
          {headerBarNavigationArray?.map((sd, i) => (
            <div
              key={i}
              
              className="cursor-pointer w-full  flex flex-col justify-start items-start  h-full"
            >
              <div onClick={() => setHeaderBarIndex((prev) => (prev === i ? -1 : i))} className={`w-full p-3  flex  justify-between ${i === headerBarIndex ? 'bg-gray-100':''} items-center`}>
                <span> {sd?.parentHeading}  </span>
                {sd?.isArrow ? (
                  <div className="">
                    <span>
                      <IoIosArrowDown
                        className={`${
                          i === headerBarIndex
                            ? "rotate-0 transition-all duration-300"
                            : "-rotate-90 transition-all duration-300"
                        }`}
                        color="black"
                        fontSize={16}
                      />
                    </span>
                  </div>
                ) : null}
              </div>
              {i === headerBarIndex ? (
                    <React.Fragment>
                      <div className="flex flex-col gap-2 px-4  w-full h-fit transition-all duration-300 z-10 ">
                        {sd?.childHeading?.map((ch, index) => (
                          <div
                            className="flex justify-between w-full hover:bg-gray-100 p-3 items-center gap-2"
                            key={index}
                          >
                            <span>{ch?.name}</span>
                            {ch?.isArrow ? (
                              <span>
                                <IoIosArrowForward
                                  color="black"
                                  fontSize={16}
                                />
                              </span>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </React.Fragment>
                  ) : null}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
