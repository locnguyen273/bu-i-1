import { useEffect } from "react";

// đầu vào 2 tham số: ref, callback
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = () => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
