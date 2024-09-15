import { useEffect, useRef, useState } from "react";
import { IoHeadsetSharp } from "react-icons/io5";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Button from "./reuse-component/Button";

const App = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      const promoBarHeight =
        document.querySelector(".promo-bar")?.clientHeight || 0;
      if (scrollTop > promoBarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="w-full h-[100vh] overflow-y-scroll"
    >
      <Header isSticky={isSticky} />
      <Home />
      <Footer />
      <div className="fixed  right-5 bottom-5">
        <Button
          iconName={<IoHeadsetSharp color="white" fontSize={18} />}
          isIcon={true}
          isBgBlack={true}
          btnName="Contact us"
        />
      </div>
    </div>
  );
};

export default App;
