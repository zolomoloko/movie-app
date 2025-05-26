import { ChevronDown, FilmIcon, Moon, Search, Sun} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Genre } from "./details/Genre";
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
        <Genre/>
        <Button variant="outline">
          <Search />
          <input type="text" placeholder="Search.." className="outline-none" />
        </Button>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex gap-3 md:hidden">
          <Search />
        </Button>
       
       
       {/* <DropdownMenu>
      <DropdownMenuTrigger asChild> */}
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      {/* </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}
      </div>
    </div>
  );
};
