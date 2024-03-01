"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDebounce } from "use-debounce";
import { InvoiceType } from "@/types";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TableInv = ({ data }: { data: InvoiceType[] }) => {
  const [query, setQuery] = useState("");
  const Router = useRouter();

  const [value] = useDebounce(query, 1000);

  const filteredData = data.filter((inv) =>
    inv.InvoiceItems.find((item) => {
      if (item.ItemLibelle.toLowerCase().includes(value.toLowerCase()))
        return inv;
    })
  );
  return (
    <>
      <div>
        <h1 className="text-center my-6 text-3xl font-bold">Invoices Table</h1>
      </div>
      <div className="flex gap-3 my-10 max-w-4xl mx-auto">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by Item Name"
          className="text-slate-600"
        />
      </div>
      <Table className="">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="font-extrabold bg-slate-200">
            <TableHead className="w-[100px]">Facture ID</TableHead>
            <TableHead className="text-left">Facture Date</TableHead>
            <TableHead className="text-left"> Client Nom</TableHead>
            <TableHead className="text-right"> Fournisseur Nom</TableHead>
            <TableHead className="text-right"> Montant TTC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {filteredData?.map((invioce: InvoiceType) => {
            const MontantTTC = invioce?.InvoiceItems?.reduce(
              (acc, invioce) =>
                acc +
                (invioce.ItemQuantity * invioce.ItemPrice + invioce.ItemTax),
              0
            );

            return (
              <TableRow
                onClick={() => Router.push(`/${invioce.InvoiceID}`)}
                key={invioce.InvoiceID}
                className="cursor-pointer"
              >
                <TableCell className="font-medium">
                  {invioce?.InvoiceID}
                </TableCell>
                <TableCell>{invioce?.InvoiceDate}</TableCell>
                <TableCell>{invioce?.ClientName}</TableCell>
                <TableCell className="text-right">
                  {invioce?.SupplierName}
                </TableCell>
                <TableCell className="text-right">{MontantTTC}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TableInv;
