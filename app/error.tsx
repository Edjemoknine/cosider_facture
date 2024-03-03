"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: any; reset: any }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-16 flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl font-semibold"> Opps!Somethingwent wrong</h1>
      <Button className="mt-6 w-fit" onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  );
};

export default Error;
