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

  const canGoPrev = prev !== null;
  const canGoNext = next !== null;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="flex items-center justify-center gap-4 mt-8" aria-label="Pagination"
    >
      <button
        className="h-10 rounded-[10px] border border-black/10 px-4 py-2 inline-flex items-center disabled:opacity-50 text-base text-[#0A0A0A]"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrev}
      >
        Prev
      </button>

      <span className="text-base font-medium text-[#0A0A0A]">
        Page {currentPage}
      </span>

      <button
        className="h-10 rounded-[10px] border border-black/10 px-4 py-2 inline-flex items-center disabled:opacity-50 text-base text-[#0A0A0A]"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
      >
        Next
      </button>
    </nav>
  );
}