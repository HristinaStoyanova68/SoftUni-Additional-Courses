export const fetchUtil = <T>(url: string, httpConfig?: RequestInit) => {
  // fetch api
  return fetch(url, httpConfig)
    .then((responce) => responce.json())
    .then((data: T) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
};
