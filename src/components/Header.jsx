import { ChevronDown, FilmIcon, Moon, Search } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="h-15 flex justify-between items-center p-5  md:max-w-[2000px] mx-auto">
      <div className="flex gap-2 items-center text-sky-800">
        <FilmIcon className="h-5 w-5" />
        <b>
          <i>MovieZ</i>
        </b>
      </div>

      <div className="hidden md:flex gap-[12px]">
        <Button variant="outline">
          <ChevronDown /> Genre
        </Button>
        <Button variant="outline">
          <Search />
          <input type="text" placeholder="Search.." className="outline-none" />
        </Button>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex gap-3 md:hidden">
          <Search />
        </Button>
        <Button variant="outline">
          <Moon />
        </Button>
      </div>
    </div>
  );
};
