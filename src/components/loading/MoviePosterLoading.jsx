import { Skeleton } from "../ui/skeleton";

export const MoviePosterLoading = () => {
  return (
    <div className="grid  gap-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
      <Skeleton className="w-[100%] min-h-[300px] md:h-[600px]" />
    </div>
  );
};
