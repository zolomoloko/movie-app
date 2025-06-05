import { SearchResultCart } from "./SearchResultCart";


export const SearchResult = ({ movies, setSearchValue }) => {
  return (
    <div className="absolute z-50 p-3 border rounded-lg top-12 bg-background">
      {movies &&
        movies?.results
          ?.slice(0, 4)
          .map((movie) => (
            <SearchResultCart movie={movie} setSearchValue={setSearchValue} />
          ))}
    </div>
  );
};