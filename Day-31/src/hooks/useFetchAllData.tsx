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
          setError("Something went wrong");
          setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetchAllData;
