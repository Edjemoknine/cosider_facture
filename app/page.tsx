import TableInv from "@/components/shared/Table";

export const getData = async () => {
  const resp = await fetch(`https://elhoussam.github.io/invoicesapi/db.json`);
  const data = await resp.json();
  return data;
};

export default async function Home() {
  const data = await getData();
  return (
    <main className="max-w-6xl mx-auto p-6">
      <TableInv data={data} />
    </main>
  );
}
