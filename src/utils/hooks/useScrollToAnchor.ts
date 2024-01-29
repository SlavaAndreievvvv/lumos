import { useEffect } from "react";
import { useIsClient } from "usehooks-ts";

export const useScrollToAnchor = (headerHeight?: number) => {
  const isClient = useIsClient();

  const handleClick = (e: Event, anchor: Element) => {
    e.preventDefault();

    const blockID = anchor.getAttribute("href")?.split("#")[1];

    const element = blockID && document.getElementById(blockID);
    const offset =
      element && element.getBoundingClientRect().top + window.pageYOffset;
    const headerOffset = headerHeight || 0;

    if (offset) {
      const targetOffset = offset - headerOffset;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isClient) {
      const anchors = document.querySelectorAll('a[href*="#"]');

      anchors.forEach((anchor) =>
        anchor.addEventListener("click", (e) => handleClick(e, anchor))
      );

      return () => {
        anchors.forEach((anchor) =>
          anchor.removeEventListener("click", (e) => handleClick(e, anchor))
        );
      };
    }

    return () => {};
  }, [isClient]);
};
