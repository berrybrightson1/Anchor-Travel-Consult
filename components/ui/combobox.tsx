"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

export interface ComboboxItem {
  value: string;
  label: string;
}

interface ComboboxProps {
  items: ComboboxItem[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
}

export const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      items,
      value,
      onChange,
      placeholder = "Select option...",
      searchPlaceholder = "Search...",
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");

    const filtered = items.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );

    const selected = items.find((item) => item.value === value);

    return (
      <div ref={ref} className="relative w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {selected?.label || placeholder}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-full min-w-[200px] p-0 shadow-lg border border-gray-200 rounded-lg bg-white z-50">
            <div className="p-3">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                autoFocus
              />
            </div>

            <div className="max-h-200 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-4 py-6 text-center text-sm text-gray-500">
                  No results found.
                </div>
              ) : (
                filtered.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      onChange(item.value);
                      setOpen(false);
                      setSearch("");
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center justify-between text-sm",
                      value === item.value && "bg-orange-50"
                    )}
                  >
                    {item.label}
                    {value === item.value && (
                      <Check className="h-4 w-4 text-orange-500" />
                    )}
                  </button>
                ))
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

Combobox.displayName = "Combobox";
