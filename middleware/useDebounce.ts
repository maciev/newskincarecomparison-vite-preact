import { useEffect, useState } from "preact/hooks";

//function useDebounce(value: any, delay: number) {
//  const [debouncedValue, setDebouncedValue] = useState(value);

//  useEffect(() => {
//    const handler = setTimeout(() => {
//      setDebouncedValue(value);
//    }, delay);

//    return () => {
//      clearTimeout(handler);
//    };
//  }, [value, delay]);

//  return debouncedValue;
//}

//export default useDebounce;

function useDebounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delay: number
) {
  let timeoutID: number | undefined;
  const debounced = (...args: Args) => {
    clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => fn(...args), delay);
  };

  return debounced;
}

export default useDebounce;
