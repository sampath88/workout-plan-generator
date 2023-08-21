import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      let item = localStorage.getItem(key);
      console.log("key: ", key);
      console.log(initialValue);
      console.log("item: ", item);
      currentValue = JSON.parse(
        localStorage.getItem(key) || JSON.stringify(initialValue)
      );
    } catch (error) {
      currentValue = initialValue;
    }
    return currentValue;
  });

  useEffect(() => {
    debugger;
    console.debug("debug: ", value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
