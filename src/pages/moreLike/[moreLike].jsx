import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { CategoryFrame } from "@/components/Pages";
import { getSameMovies } from "@/lib/api/api/getSameMovies";
import { useRouter } from "next/router";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

const moreLike = () => {
  const router = useRouter();
  const moreLike = router.query.moreLike;
  const [more, setMore] = useState({});
  console.log("borooboroo", more);
    // const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  useEffect(() => {
    if (!moreLike) return;
    console.log("nnn", moreLike);
    const getMoreLike = async () => {
      const data = await getSameMovies(moreLike);
      setMore(data);
    };
    getMoreLike();
  }, [moreLike]);
  return (
    <div>
      <Header />
      <div className="grid  gap-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {more.results?.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </div>
      {/* <CategoryFrame
        page={page}
        setPage={setPage}
        movieCategory={more}
      /> */}
      <Footer />
    </div>
  );
};

export default moreLike;
