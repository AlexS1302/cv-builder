import { useState, useRef, useEffect } from "react";

function useContainerWidth(initialWidth = null) {
  const [width, setWidth] = useState(initialWidth);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { width, containerRef };
}
export default useContainerWidth;
