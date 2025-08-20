import { useState, useEffect } from "react";

function useBreakpoint(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const listener = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
export default useBreakpoint;
