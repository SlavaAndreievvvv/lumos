import { RefObject, useEffect } from "react";

export const useCustomFocus = (
  refs: RefObject<HTMLElement | null>[],
  event: string = "click"
) => {
  useEffect(() => {
    const handleButtonClick = () => {
      if (Array.isArray(refs)) {
        refs.map((ref) => ref?.current?.focus());
      }
    };

    if (Array.isArray(refs)) {
      refs.map((ref) =>
        ref?.current?.addEventListener(event, handleButtonClick)
      );
    }

    return () => {
      if (Array.isArray(refs)) {
        refs.map((ref) =>
          ref?.current?.removeEventListener(event, handleButtonClick)
        );
      }
    };
  }, [refs, event]);
};
