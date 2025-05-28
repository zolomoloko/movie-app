import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { GenresButton } from "./GenresButton";

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
        <DropdownMenuContent className="w-150 p-5">
          <GenresButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
