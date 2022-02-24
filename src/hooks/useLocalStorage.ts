import { useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [storagedValue, setStoragedValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // -------------------------------------------------
  // Function to setValue in localStorage
  // -------------------------------------------------
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storagedValue) : value;
      setStoragedValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storagedValue, setValue] as const;
};

export default useLocalStorage;
