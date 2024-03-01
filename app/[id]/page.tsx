import React from "react";
import { getData } from "../page";
import { InvoiceType } from "@/types";

const Details = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const data = await getData();
  const invoiceDetail = data.find((inv: InvoiceType) => inv.InvoiceID === id);

  console.log(invoiceDetail);

  return <div>Details</div>;
};

export default Details;
