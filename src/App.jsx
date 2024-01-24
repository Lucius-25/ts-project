import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";

const App = () => {
  const [fetch, setFetch] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await GetBookData("book");
        setFetch((pre) => {
          return {
            error: null,
            loading: false,
            data: data,
          };
        });
      } catch (e) {
        setFetch((pre) => {
          return {
            error: e.message,
            loading: false,
            data: null,
          };
        });
      }
    })();
  }, []);
  return (
    <div>
      {fetch.loading ? (
        <h1>Loading... Please Wait</h1>
      ) : (
        <>
          {fetch.data ? (
            <div>{JSON.stringify(fetch.data)}</div>
          ) : (
            <h1>{fetch.error}</h1>
          )}
        </>
      )}
    </div>
  );
};

export default App;
