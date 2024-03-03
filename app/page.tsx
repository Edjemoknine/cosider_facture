import TableInv from "@/components/shared/Table";
import { getData } from "@/lib/Fetch";
import { InvoiceType } from "@/types";
import { Suspense } from "react";

export default async function Home() {
  const data: InvoiceType[] = await getData();
  return (
    <main className="max-w-6xl mx-auto p-6">
      <Suspense fallback="Loading...">
        <TableInv data={data} />
      </Suspense>
    </main>
  );
}
