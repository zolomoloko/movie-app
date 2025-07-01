import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SearchResult } from "./SearchResult";
import { Input } from "../ui/input";
import Link from "next/link";
import { Search } from "lucide-react";

export const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}search/movie?query=${searchValue}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();

      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovie();
  }, [searchValue]);

  return (
    <div className="relative flex items-center border-1 rounded-lg">
      <div className={cn("relative text-muted-foreground", "w-[379px]")}>
        <Link href={`/searchPage?searchValue=${searchValue}`}>
          <Search className="w-4 h-4 absolute -translate-y-1/2 left-3 top-1/2" />
        </Link>
        <Input
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          type="text"
          placeholder="Search..."
          className={cn(
            "pl-[38px]",
            "border-1 shadow-none sm:w-[400px] w-[120px]"
          )}
        />
      </div>

      {movies?.results?.length > 0 && (
        <SearchResult movies={movies} setSearchValue={setSearchValue} />
      )}
    </div>
  );
};
