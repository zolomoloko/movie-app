import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";


export const CategoryFrame = ({ page, setPage, movieCategory }) => {
  const totalPage = movieCategory.total_pages;
  const handlePrevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleSelectPage = (pageMumber) => {
    setPage(pageMumber);
  };

  const handleNextPage = () => {
    if (page === totalPage) return;
    setPage(page + 1);
  };
  const paginations = Array(totalPage)
    .fill(null)
    .map((_, index) => index + 1);

  const nomalizedPaginations = paginations.filter(
    (pagination) => page + 2 >= pagination && page - 2 <= pagination
  );

  return (
    <div className="pt-[32px] pb-[76px]">
      <Pagination>
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={handlePrevPage} />
          </PaginationItem>
          {nomalizedPaginations?.map((pageNumber) => {
            return (
              <PaginationItem className="cursor-pointer">
                <PaginationLink onClick={() => handleSelectPage(pageNumber)}>
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
