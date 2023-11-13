"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

function SearchBar() {
  return (
    <div className="flex items-center">
      <Input type="text" placeholder="Search" className="mr-2" />
      <Button type="submit">
        <Search className="w-4 h-4" />
      </Button>
    </div>
  );
}

export default SearchBar;
