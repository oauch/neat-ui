import { useEffect, useState } from "react";

const INITIAL_SIZE = { width: 0, height: 0 };

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(INITIAL_SIZE);

  useEffect(() => {
    const onResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
