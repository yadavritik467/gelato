import Button from "../reuse-component/Button";
import Choose from "./Choose";
import Hero from "./Hero";

const Home = () => {
  const section_4 = [
    {
      smallHeading: "For print on demand sellers", //24px
      mainHeading:
        "Accelerate business growth with innovative design tools and apps", //60px
      para: "See how our cutting-edge solutions can help you reach new customers and maximize your profits.", //24px
      src: "/img/cloth_3.gif",
      isGray: true,
      buttonEle: (
        <Button isIcon={false} isBgBlack={true} btnName="Get Started" />
      ),
    },
    {
      smallHeading: "For print producers", //24px
      mainHeading: "GelatoConnect", //60px
      para: "Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry", //24px
      src: "/img/phone_1.gif",
      isGray: false,
      buttonEle: (
        <Button isIcon={false} isBgBlack={true} btnName="Learn More" />
      ),
    },
    {
      smallHeading: "", //24px
      mainHeading: "Meet GelatoConnect at Printing United", //60px
      para: "Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.", //24px
      src: "/img/print.webp",
      isGray: true,
      buttonEle: (
        <Button isIcon={false} isBgBlack={true} btnName="Book Meeting" />
      ),
    },
  ];
  return (
    <div className="w-full pb-20 bg-white h-fit">
      {/* hero section */}
      <Hero />
      {/* section 2 */}

      <div className="bg-gray-100 h-fit my-10 py-10 px-8 grid grid-cols-12 ">
        <div className="col-span-4 max-md:col-span-12 max-md:py-4 flex flex-col justify-center items-center">
          <p className="text-black text-[32px] max-sm:text-[25px]">90%</p>
          <p className="text-black text-[24px] max-sm:text-[20px]">
            of all orders are produced locally
          </p>
        </div>
        <div className="col-span-4 max-md:col-span-12 max-md:py-4 flex flex-col justify-center items-center">
          <p className="text-black text-[32px] max-sm:text-[25px]">90%</p>
          <p className="text-black text-[24px] max-sm:text-[20px]">
            of orders arrive within 5 days of ordering
          </p>
        </div>
        <div className="col-span-4 max-md:col-span-12 max-md:py-4 flex flex-col justify-center items-center">
          <p className="text-black text-[32px] max-sm:text-[25px]">140+</p>
          <p className="text-black text-[24px] max-sm:text-[20px]">
            print providers across 32 countries
          </p>
        </div>
      </div>
      {/* choose us */}
      <Choose />
      {/* section 4 */}
      <div className="w-full h-fit flex flex-col">
        {section_4?.map((sec, i) => (
          <div
            className={`flex max-[900px]:flex-col ${i % 2 == 0 ? "" : "flex-row-reverse"}  ${
              sec?.isGray ? "bg-gray-100" : "bg-white"
            } w-full px-24 max-md:px-10 max-sm:px-5 h-fit py-10 `}
            key={i}
          >
            <div className="w-[50%] max-[900px]:w-full  flex flex-col justify-center items-start gap-3">
              {sec?.smallHeading ? (
                <p className="text-black opacity-80 text-[18px]">
                  {sec?.smallHeading}
                </p>
              ) : null}
              <p className="text-black font-bold max-2xl:text-[50px] max-md:text-[40px] text-[60px]">
                {sec?.mainHeading}
              </p>
              <p className="text-black opacity-80 text-[24px]">{sec?.para}</p>
              <div className="w-fit">{sec?.buttonEle}</div>
            </div>
            <div className={`w-[50%] max-[900px]:w-full flex justify-center items-center  `}>
              <img
                src={sec?.src}
                className={`w-[500px] h-fit ${
                  sec?.isGray ? "bg-gray-100" : "bg-white"
                }  object-contain`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
