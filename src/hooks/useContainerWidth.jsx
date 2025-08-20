import { useState, useRef, useEffect } from "react";

function useContainerWidth(initialWidth = 600) {
  const [width, setWidth] = useState(initialWidth);
  const containerRef = useRef(null);

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
