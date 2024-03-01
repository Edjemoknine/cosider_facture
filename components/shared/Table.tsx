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

import { InvoiceType } from "@/types";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
const TableInv = ({ data }: { data: InvoiceType[] }) => {
  const [query, setQuery] = useState("");

  const filteredData = data.filter((inv) =>
    inv.InvoiceItems.find((item) => {
      if (item.ItemLibelle.toLowerCase().includes(query.toLowerCase()))
        return inv;
    })
  );

  return (
    <>
      <div>
        <h1 className="text-center my-6 text-3xl font-bold">Invoices Table</h1>
      </div>
      <div className="flex gap-3 my-10">
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
          <TableRow className="font-extrabold ">
            <TableHead className="w-[100px]">Facture ID</TableHead>
            <TableHead className="text-center">Facture Date</TableHead>
            <TableHead className="text-center"> Client Nom</TableHead>
            <TableHead className="text-right"> Fournisseur Nom</TableHead>
            <TableHead className="text-right"> Montant TTC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {filteredData?.map((invioce: InvoiceType) => {
            const MontantTTC = invioce?.InvoiceItems?.reduce(
              (acc, invioce) =>
                acc +
                (invioce.ItemQuantity * invioce.ItemPrice + invioce.ItemTax),
              0
            );

            return (
              <TableRow key={invioce.InvoiceID}>
                <TableCell className="font-medium">
                  <Link href={`/${invioce.InvoiceID}`} key={invioce.InvoiceID}>
                    {invioce?.InvoiceID}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/${invioce.InvoiceID}`} key={invioce.InvoiceID}>
                    {invioce?.InvoiceDate}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/${invioce.InvoiceID}`} key={invioce.InvoiceID}>
                    {invioce?.ClientName}
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/${invioce.InvoiceID}`} key={invioce.InvoiceID}>
                    {invioce?.SupplierName}
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/${invioce.InvoiceID}`} key={invioce.InvoiceID}>
                    {MontantTTC}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TableInv;
