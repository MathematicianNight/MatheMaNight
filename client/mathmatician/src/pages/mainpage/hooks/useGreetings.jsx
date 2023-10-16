import { useState, useEffect } from "react";

const useGreetings = () => {
  const [greetingData, setGreetingData] = useState([]);

  useEffect(() => {
    // const apiUrl = "http://13.124.51.51:4000/greeting";
    const apiUrl = "https://api.mathnight.site/greeting";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setGreetingData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return greetingData;
};

export default useGreetings;
