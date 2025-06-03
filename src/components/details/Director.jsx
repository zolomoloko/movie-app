import { getDirector } from "@/lib/api/api/getDirectorTable";
import { useEffect, useState } from "react";

export const Director = ({ id }) => {
  const [directors, setDirector] = useState([]);
  const [writers, setWriters] = useState([]);
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    if (!id) return;
    const fetchdDirector = async () => {
      try {
        const data = await getDirector(id);
        console.log("Raw director data:", data);

        const isDirector = data?.crew?.filter(
          (person) => person.job === "Director"
        );

        const isWriter = data?.crew?.filter(
          (person) => person.department === "Writing"
        );
        const writers = isWriter.slice(0, 1);
        const isStar = data?.cast?.filter(
          (person) => person.known_for_department === "Acting"
        );
        const cast = isStar.slice(0, 3);

        setDirector(isDirector);
        setWriters(writers);
        setCasts(cast);
      } catch (error) {
        console.error("Failed to fetch directors:", error);
      }
    };

    fetchdDirector();
  }, [id]);
  return (
    <table className="pt-5 mx-5 md:mx-0 table-fixed w-full">
      <tbody className="border-b border-gray-300 divide-y">
        <tr className="text-left">
          <th className="pb-1 pt-5">Director</th>
          {directors.map((person) => (
            <td key={person.id} className="pb-1 pt-5">{person.name}</td>
          ))}
        </tr>
        <tr className="text-left">
          <th className="pb-1 pt-5 ">Writers</th>
         {writers.map((person)=> (
           <td key={person.id} className="pb-1 pt-5">
            {person.name}
          </td>
         ))}
        </tr>
        <tr className="text-left">
          <th className="pb-1 pt-5">Stars</th>
          {casts.map((cast)=>(
            <td key={cast.id} className="pb-1 pt-5">
            {cast.name}
          </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
