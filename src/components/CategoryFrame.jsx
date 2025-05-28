
// import { parseAsInteger, useQueryState } from "nuqs";
// import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
// import { useState } from "react";

// export const CategoryFrame = () => {
//   const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
//   const [totalPages, setTotalPage] = useState(0)
//   useEffect(()=>{
//     // const fetchMovies = async () => {
//     //   const data = await ///////
//     // }
//   })
//   const handlePrevPage = () => {
//     setPage(page -1);
//   };
//   const handleSelectPage = (pageMumber) => {
//     setPage(pageMumber);
//   };
//   const handleNextPage = () => {
//     setPage(page +1);
//   };
//   const paginations = new Array(totalPages)
//   .fill(null)
//   .map((_, index) => index + 1)
//   .slice(0, 3);
//   console.log(paginations)
//   return (
//     <div className="pt-[32px] pb-[76px]">
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious onClick={handlePrevPage} />
//           </PaginationItem>
//           {paginations?.map((pageNumber)=>{
//             return (
//               <PaginationItem>
//                 <PaginationLink onClick={()=>handleSelectPage(pageNumber)}>1</PaginationLink>
//               </PaginationItem>
//             )
//           })}
         
//           <PaginationItem>
//             <PaginationEllipsis />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationNext onClick={handleNextPagea}/>
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// };
