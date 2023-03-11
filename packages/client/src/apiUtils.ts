export function apiURL() {
  return `${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}${
    import.meta.env.VITE_API_PATH
  }`;
}

export const fetcher = (
  url: RequestInfo | URL,
  options: RequestInit | undefined,
) => fetch(url, options).then((response) => response.json());
