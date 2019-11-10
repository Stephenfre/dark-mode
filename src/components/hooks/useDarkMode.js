import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("isDark");

  //   const toggleChanges = e => {
  //      setValues({ ...values, [e.target.className]: e.target.value });
  //  };

  useEffect(() => {
    if (someValue === true)
      document.querySelector("body").classList.add("dark-mode");
    else document.querySelector("body").classList.remove("dark-mode");
  }, [someValue]);
  return [someValue, setSomeValue];
};
