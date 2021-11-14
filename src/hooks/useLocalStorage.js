import { useState, useEffect } from "react";

function useLocalStorage(key) {
  const [value, setVaue] = useState(() => {
    const localStorage = window.localStorage.getItem(key);
    return localStorage !== null ? JSON.parse(localStorage) : [];
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setVaue];
}

export default useLocalStorage;
