import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    console.log("entered useeffect");

    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    /*
    const cleanUp = () => {
      console.log("cleaning up things");
      window.removeEventListener("resize", handleResize);
    };
    // cleanUp() - call nahi karna hai,  return karna hai
    return cleanUp;
    */
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
