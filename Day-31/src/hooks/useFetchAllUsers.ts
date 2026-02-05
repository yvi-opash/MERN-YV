import { useEffect, useState } from "react";

function useFetchAllData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((result: T) => {
           setData(result);
            setLoading(false);
         })
         .catch(() => {
              setError("Error");
             setLoading(false);
        });
  }, [url]);

  return {data,loading,error };
}

export default useFetchAllData;


//  generic
// T: Type (the most general and common placeholder)
// K: Key (used in key-value pairs, often constrained by keyof T)
// V: Value (used with K for value types)
// E: Element (common for elements within a collection or array)
// P: Property (often used for properties of an object)
// N: Number (for type parameters constrained to number types)
// R: Return (used to denote a function's return type in advanced utilities)
// U, S: Second, third (etc.) types (used as general-purpose placeholders when multiple types are needed after T) 