import axios from "axios";
import useSWR from "swr";

export const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  withCredentials: true,
});

/**
 *
 * @param {string} path
 */
export const fetcher = async (path: string) => {
  return API.get(path)
    .then((res) => res.data)
    .catch((error) => {
      throw (
        error.response?.data?.message ||
        error.message ||
        "Unknown error occurred"
      );
    });
};

/**
 *
 * @param {string} pathname
 */
export const useFetcher = (pathname: string) => {
  const { data, error, isLoading } = useSWR(pathname, fetcher);
  return {
    data,
    isLoading: isLoading || (!error && !data),
    isError: error,
  };
};
