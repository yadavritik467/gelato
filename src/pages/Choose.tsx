const Choose = () => {
  const chooseUsDetails = [
    {
      heading: "World's largest print-on-demand network",
      paragraph:
        "140+ print partners in 32 countries. Gelato is a truly global service.",
    },
    {
      heading: "Sell globally, produce locally",
      paragraph:
        "Your products are produced close to your customers, wherever they are.",
    },
    {
      heading: "100% free editing tools.",
      paragraph: `Create your custom products using our suite of`,
      firstUrl: "free tools",
    },
    {
      heading: "60+logistics partners",
      paragraph:
        "Our global network of logistics partners ensures your products are delivered fast.",
    },
    {
      heading: "High-quality products",
      paragraph:
        "We partner with the world's leading brands to ensure the best quality products.",
    },
    {
      heading: "Endless creativity with Shutterstock Images",
      paragraph:
        "Access millions of images and graphics to create unique products you can sell in your store.",
    },
    {
      heading: "1-click integration to the leading ecommerce platforms",
      paragraph: "Connect your store to Gelato using",
      firstUrl: "our integrations",
      text: "with",
      secondUrl: "Shopify ,",
      thirdUrl: "Etsy.",
      secondText: "and more.",
    },
  ];
  return (
    <div className="grid grid-cols-12 pb-20">
      <div className="col-span-12 py-8 text-center font-bold max-2xl:text-[50px] max-md:text-[40px] text-[60px]">
        Why choose Gelato
      </div>

      <div className="col-span-6 max-md:col-span-12 max-md:order-first flex justify-center items-center p-10">
        <img
          src="/img/cloth_2.webp"
          className="w-[600px] h-fit object-cover"
          alt="cloth_1.webp"
        />
      </div>
      <div className="col-span-6 max-md:col-span-12 flex flex-col gap-5 max-md:p-10 max-sm:p-5 justify-center h-fit ">
        {chooseUsDetails?.map((c, i) => (
          <div key={i} className="flex flex-col gap-3">
            <p className="font-bold text-black text-[24px]">▻ {c?.heading}</p>
            <p className=" text-black text-[16]">
              {c?.paragraph}{" "}
              <a className="text-black underline hover:opacity-30" href="">
                {c?.firstUrl ?? ""}
              </a>{" "}
              <span>{c?.text ?? ""}</span>{" "}
              <a className="text-black underline hover:opacity-30" href="">
                {c?.secondUrl ?? ""}
              </a>{" "}
              <a className="text-black underline hover:opacity-30" href="">
                {c?.thirdUrl ?? ""}
              </a>{" "}
              <span>{c?.secondText ?? ""}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
