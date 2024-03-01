import React from "react";

import FacturePrint from "@/components/shared/FacturePrint";
import { InvoiceType } from "@/types";
import { getData } from "@/lib/Fetch";

const Details = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const data = await getData();

  const invoiceDetail: InvoiceType = data.find(
    (inv: InvoiceType) => inv.InvoiceID === id
  );
  return (
    <main className="relative">
      <FacturePrint invoiceDetail={invoiceDetail} />
    </main>
  );
};

export default Details;
