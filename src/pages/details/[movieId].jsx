import { DetailsHeader } from "@/components/DetailsHeader";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";

export default function Details () {
  const router = useRouter();

  return(
    <div>
        <Header/>
        <DetailsHeader/>
    </div>
  )
};
// /movie/${movieId}?language=en-US


