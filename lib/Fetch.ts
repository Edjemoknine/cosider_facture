export const getData = async () => {
  try {
    const resp = await fetch(`https://elhoussam.github.io/invoicesapi/db.json`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
