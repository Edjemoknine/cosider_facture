"use client";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="flex gap-3 my-10">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by Item Name"
        className="text-slate-200"
      />
      <Button>Search</Button>
    </div>
  );
};

export default Search;
