"use client";
import React from "react";
import { useRef } from "react";
import { Button } from "../ui/button";
import { InvoiceType } from "@/types";
import { useReactToPrint } from "react-to-print";

const FacturePrint = ({ invoiceDetail }: { invoiceDetail: InvoiceType }) => {
  const ref = useRef(null);
  const total = invoiceDetail.InvoiceItems.reduce(
    (acc, curr) => acc + curr.ItemQuantity * curr.ItemPrice,

    0
  );
  const Tva = invoiceDetail.InvoiceItems.reduce(
    (acc, curr) => acc + curr.ItemTax,

    0
  );

  const handlePrint = useReactToPrint({
    content: () => ref?.current,
  });

  return (
    <main className="relative">
      <Button className="absolute left-20 bottom-8 " onClick={handlePrint}>
        {"Download"}
      </Button>
      <section ref={ref} className="max-w-6xl mx-auto p-6 px-20">
        <div className="">
          <h1 className="text-center text-4xl font-semibold my-6">
            Facture № {invoiceDetail.InvoiceID}
          </h1>
          <div className="flex justify-end max-w-3xl">
            <p className="text-xl">
              Date de facture : {invoiceDetail.InvoiceDate}{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-32 my-20">
          <div className="w-full">
            <div className="border-b-2 pb-1 border-slate-500 mb-3 w-full">
              FOURNISSEUR
            </div>
            <h4 className="font-extrabold">{invoiceDetail.SupplierName}</h4>
            <p>INFORMATION DE FOURNISSEUR</p>
          </div>
          <div className="w-full">
            <div className="border-b-2 pb-1 border-slate-500 mb-3 w-full">
              CLIENT
            </div>
            <h4 className="font-extrabold">{invoiceDetail.ClientName}</h4>
            <p>INFORMATION DE CLIENT</p>
          </div>
        </div>

        <table border={4} className="w-full mb-10 p-2 border-2 border-gray-950">
          <tr className="text-left bg-orange-400">
            <th className="border-2 border-gray-950 p-2">N°</th>
            <th className="border-2 border-gray-950 p-2">LIBELLE</th>
            <th className="border-2 border-gray-950 p-2">Unit</th>
            <th className="border-2 border-gray-950 p-2">QUANTITÉ</th>
            <th className="border-2 border-gray-950 p-2">PRIX</th>
            <th className="border-2 border-gray-950 p-2">HT</th>
            <th className="border-2 border-gray-950 p-2">TTC</th>
          </tr>
          {invoiceDetail.InvoiceItems.map((inv) => (
            <tr key={inv.ItemID}>
              <td className="border-2 border-gray-950 p-2">{inv.ItemID}</td>
              <td className="border-2 border-gray-950 p-2">
                {inv.ItemLibelle}
              </td>
              <td className="border-2 border-gray-950 p-2">{inv.ItemUnit}</td>
              <td className="border-2 border-gray-950 p-2">
                {inv.ItemQuantity}
              </td>
              <td className="border-2 border-gray-950 p-2">{inv.ItemPrice}</td>
              <td className="border-2 border-gray-950 p-2">{inv.ItemTax}</td>
              <td className="border-2 border-gray-950 p-2">
                {inv.ItemQuantity * inv.ItemPrice + inv.ItemTax}
              </td>
            </tr>
          ))}
        </table>
        <div className="border-2 w-1/2 ml-auto border-[#323232]">
          <div className="flex border-b divide-gray-600 border-[#323232] divide-x-2 ">
            <span className="flex-1 p-2">TOTAL</span>
            <span className="flex-1 p-2">{total}</span>
          </div>
          <div className="flex border-b divide-gray-600 border-[#323232] divide-x-2 ">
            <span className="flex-1 p-2">TVA</span>
            <span className="flex-1 p-2">{Tva}</span>
          </div>
          <div className="flex divide-gray-600 border-[#323232] divide-x-2 ">
            <span className="flex-1 font-extrabold italic p-2">Total TTC</span>
            <span className="flex-1 p-2 font-extrabold">{total + Tva}.00</span>
          </div>
        </div>

        <div className=" w-fit ml-auto italic mt-32 ">LA SIGNATURE</div>
      </section>
    </main>
  );
};

export default FacturePrint;
