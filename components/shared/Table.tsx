import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Search from "./Search";
import { InvoiceType } from "@/types";
const getData = async () => {
  const resp = await fetch(`https://elhoussam.github.io/invoicesapi/db.json`);
  const data = await resp.json();
  return data;
};
const TableInv = async () => {
  const data = await getData();

  //   console.log(data);

  return (
    <>
      <div>
        <h1 className="text-center my-6 text-3xl font-bold">Invoices Table</h1>
      </div>
      <Search />
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
          {data?.map((invioce: InvoiceType) => {
            const MontantTTC = invioce?.InvoiceItems?.reduce(
              (acc, invioce) =>
                acc +
                (invioce.ItemQuantity * invioce.ItemPrice + invioce.ItemTax),
              0
            );

            return (
              <TableRow key={invioce.InvoiceID}>
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
