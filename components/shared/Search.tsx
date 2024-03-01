"use client";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";

const Search = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="flex gap-3 my-10">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by Item Name"
        className="text-slate-600"
      />
      <Button asChild>
        <Link href={`?query=${query}`}>Search</Link>
      </Button>
    </div>
  );
};

export default Search;
