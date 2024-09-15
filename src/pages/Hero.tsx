import { FaStar } from "react-icons/fa";
import Button from "../reuse-component/Button";

const Hero = () => {
  return <div className="px-28 max-md:px-5 grid grid-cols-12">
  <div className="col-span-6 max-lg:col-span-12 max-lg:order-last flex flex-col items-start justify-start gap-4">
    <p className="text-black opacity-90 font-bold max-2xl:text-[50px] max-md:text-[40px] text-[60px]">
      Print on demand for your ecommerce business
    </p>
    <p className="text-black opacity-90 font-bold text-[24px]">
      Sign up for free and only pay for what you sell
    </p>
    <p className="text-black opacity-90  text-[16px]">
      Turn your passion into profit with the world's largest{" "}
      <a className="text-black underline hover:opacity-30" href="">
        print on demand
      </a>{" "}
      network.
    </p>
    <div className="flex gap-4 items-center">
      <Button
        isIcon={false}
        isBgBlack={true}
        btnName="Get Started for free"
      />
      <div className="rounded-full border border-gray-300 ">
        <Button
          isIcon={false}
          isBgBlack={false}
          btnName="See Our Products"
        />
      </div>
    </div>

    <div className="flex flex-col pt-10">
      <img
        src="/img/shopify_monotone_black.svg"
        className="w-fit h-[40px]  object-cover"
        alt="shopify.svg"
      />
      <div>
        <div className="flex gap-3 pt-4 items-center">
          {Array.from({ length: 5 })?.map((_, i: number) => (
            <div key={i}>
              <FaStar className="text-gray-400" fontSize={24} />
            </div>
          ))}
          <p className="cursor-pointer hover:opacity-80">4.8 / 5</p>
        </div>
        <p className="pt-4 cursor-pointer hover:opacity-80 text-[18px]">
          based on 887 reviews
        </p>
      </div>
    </div>
  </div>
  <div className="col-span-6 max-lg:col-span-12 max-lg:order-first flex justify-center items-center">
    <img
      src="/img/cloth_1.webp"
      className="w-[600px] h-fit object-cover"
      alt="cloth_1.webp"
    />
  </div>
</div>;
};

export default Hero;
