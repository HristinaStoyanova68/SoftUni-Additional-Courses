export const fetchUtil = <T>(url: string, httpConfig?: RequestInit) => {
  // fetch api
  return fetch(url, httpConfig)
    .then((responce) => responce.json())
    .then((data: T) => data)
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
};
