import { GenresButton } from "@/components/genre/GenresButton";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { getSearchPage } from "@/lib/api/getSearchPage";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchPage = () => {
    const router = useRouter();
    const searchId = router.query.searchValue;
    const [searchFilter, setSearchFilter] = useState({});
    console.log(searchFilter)
    
    useEffect(() => {
        if(!searchId) return;
        console.log(searchId)
        const getSearch = async () => {
            const data = await getSearchPage(searchId);
            setSearchFilter(data);
            
        }
        getSearch();
    }, [searchId])
    console.log("qqq",searchId);
    
    // if (!searchFilter || !searchFilter.results) return null;
    // const resultSearchMovie = searchFilter.results
    return(
        <div>
            <Header/>
            <div>
                <p>Search results</p>
                <div className="flex gap-7">
                    <div>
                        {/* {resultSearchMovie?.map((movie) => (
                            <MovieCard movie={movie} key={movie.id}/>
                        ))} */}
                    </div>
                    <div>
                        <Separator className="w-full" />
                    </div>
                    <div>
                        <GenresButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchPage;