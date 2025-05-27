import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Genre = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <ChevronDown />
            Genre
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="font-bold text-[24px]">
            Genres
          </DropdownMenuLabel>
          <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex gap-3 flex-wrap font-bold">
            <Button
              variant="secondary"
              className="border-gray-400 border-[1px] rounded-full px-[10px] py-[2px] flex"
            >
              Action <ChevronRight />
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
