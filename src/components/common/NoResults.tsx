import { SearchX } from 'lucide-react';

interface NoResultsProps {
  searchTerm: string;
}

export default function NoResults({ searchTerm }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <SearchX className="h-16 w-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold">No results found</h2>
      <p className="text-gray-600 mt-2">
        We couldn't find any characters matching "{searchTerm}".
      </p>
    </div>
  );
}