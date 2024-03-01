export const getData = async () => {
  const resp = await fetch(`https://elhoussam.github.io/invoicesapi/db.json`);
  const data = await resp.json();
  return data;
};
