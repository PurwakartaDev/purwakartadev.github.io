import { useEffect, type RefObject } from "react";

const useAutoFocus = (refEl: RefObject<HTMLInputElement>) => {
  useEffect(() => {
    if (refEl.current) {
      refEl.current.focus();
    }
  }, []);

  return refEl;
};

export default useAutoFocus;
