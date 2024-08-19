import { useEffect, useState } from "react";

import { API_URL } from "../constants";

export default function useCurrencyInfo(currency: string) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const apiResponse = await fetch(`${API_URL}/${currency}.json`);
        if (!apiResponse.ok) {
          throw new Error(
            `Error: ${apiResponse.status} ${apiResponse.statusText}`
          );
        }

        const result = await apiResponse.json();
        setData(result[currency]);
      } catch (error) {
        console.error("Something went wrong!", error);
      }
    };

    fetchCurrencyRates();
  }, [currency]);

  return data;
}
