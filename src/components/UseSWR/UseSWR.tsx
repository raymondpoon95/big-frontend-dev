import CodeDisplay from "../CodeDisplay/CodeDisplay";

const useSWRCodeString = `
    import { useEffect, useState } from "react";

    export function useSWR<T = any, E = any>(
    _key: string,
    fetcher: () => T | Promise<T>
    ): {
    data?: T;
    error?: E;
    } {
    const fetchApi = fetcher();
    const [data, setData] = useState<T | undefined>(
        fetchApi instanceof Promise ? undefined : fetchApi
    );
    const [error, setError] = useState<E>();

    useEffect(() => {
        if (fetchApi instanceof Promise) {
        Promise.resolve(fetchApi)
            .then((response) => setData(response))
            .catch((error) => setError(error));
        }
    }, []);

    return { data, error };
    }
`;

const UseSWR = () => {
  return (
    <>
      <h1>UseSWR</h1>
      <CodeDisplay code={useSWRCodeString} />
    </>
  );
};

export default UseSWR;
