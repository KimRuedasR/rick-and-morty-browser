import type { PageInfo } from "@/types/graphql";

interface PaginationProps {
  currentPage: number;
  info: PageInfo;
  onPageChange: (newPage: number) => void;
}

export default function Pagination({
  currentPage,
  info,
  onPageChange,
}: PaginationProps) {
  const { pages: totalPages, next, prev } = info;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between p-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={prev === null}
        className="disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={next === null}
        className="disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
}