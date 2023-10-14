import { useEffect, useState } from "react";

const useDebouce = (value, delay = 750) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  console.log(value);
  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(debounce);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebouce;
