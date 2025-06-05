import { ChevronDown, FilmIcon, Moon, Search, Sun } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Genre } from "./genre/Genre";
import { ModeToggle } from "./ModeToggle";
import { HeaderSearch } from "./search/search";
// import * as React from "react"
// import { useTheme } from "next-themes"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const Header = () => {
  return (
    <div className="h-15 flex justify-between items-center p-5  md:max-w-[1800px] mx-auto">
      <Link href={"/"}>
        <div className="flex gap-2 items-center text-sky-800">
          <FilmIcon className="h-5 w-5" />

          <b>
            <i>MovieZ</i>
          </b>
        </div>
      </Link>

      <div className="hidden md:flex gap-[12px]">
        <Genre />
        <HeaderSearch />
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex gap-3 md:hidden">
          <Search />
        </Button>

        <ModeToggle />
      </div>
    </div>
  );
};
