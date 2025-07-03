import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PaginationControlsProps = {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};

const PaginationControls = ({
  currentPage,
  pageCount,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: PaginationControlsProps) => {
  const pageSizeOptions = [25, 50];

  // Generate page numbers to show (current, +/- 1, first, last)
  const getVisiblePages = () => {
    const delta = 1; // How many pages to show before and after current page
    const pages = [];

    // Always include first page
    pages.push(0);

    // Current page and delta around it
    const rangeStart = Math.max(1, currentPage - delta);
    const rangeEnd = Math.min(pageCount - 2, currentPage + delta);

    // Add ellipsis after first page if needed
    if (rangeStart > 1) {
      pages.push(-1); // -1 represents ellipsis
    }

    // Add pages in the middle
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < pageCount - 2) {
      pages.push(-2); // -2 represents ellipsis
    }

    // Always include last page if there are more than one page
    if (pageCount > 1) {
      pages.push(pageCount - 1);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  if (pageCount <= 1) {
    return null;
  }

  return (
    <div className="flex px-4 py-3 border-t">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Deals per page:</span>
        <Select
          value={String(pageSize)}
          onValueChange={(value) => onPageSizeChange(Number(value))}
        >
          <SelectTrigger className="h-8 w-16">
            <SelectValue placeholder={pageSize} />
          </SelectTrigger>
          <SelectContent>
            {pageSizeOptions.map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => currentPage > 0 && onPageChange(currentPage - 1)}
              className={
                currentPage === 0
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>

          {visiblePages.map((pageIndex, i) => {
            // Handle ellipsis
            if (pageIndex < 0) {
              return (
                <PaginationItem key={`ellipsis-${i}`}>
                  <span className="flex h-9 w-9 items-center justify-center">
                    …
                  </span>
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={pageIndex}>
                <PaginationLink
                  isActive={pageIndex === currentPage}
                  onClick={() => onPageChange(pageIndex)}
                  className="cursor-pointer"
                >
                  {pageIndex + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                currentPage < pageCount - 1 && onPageChange(currentPage + 1)
              }
              className={
                currentPage >= pageCount - 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationControls;
