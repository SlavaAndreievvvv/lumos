import { RefObject, useEffect } from "react";

export const useCustomFocus = (
  ref: RefObject<HTMLElement | null>,
  event: string = "click"
) => {
  useEffect(() => {
    const handleButtonClick = () => {
      const button = ref.current;

      if (button) {
        button.focus();
      }
    };

    const button = ref.current;
    if (button) {
      button.addEventListener(event, handleButtonClick);
    }

    return () => {
      if (button) {
        button.removeEventListener(event, handleButtonClick);
      }
    };
  }, [ref, event]);
};
