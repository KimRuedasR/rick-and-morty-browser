import { cn } from "@/lib/utils";
import type { CharacterStatus } from "@/types/character";

interface StatusBadgeProps {
  status: CharacterStatus;
}

const statusConfig: Record<
  CharacterStatus,
  { dot: string; text: string; background: string }
> = {
  Alive: {
    dot: "bg-[#00C950]",
    text: "text-[#030213]",
    background: "bg-[#ECEEF2]",
  },
  Dead: {
    dot: "bg-[#FB2C36]",
    text: "text-[#030213]",
    background: "bg-[#ECEEF2]",
  },
  unknown: {
    dot: "bg-[#6A7282]",
    text: "text-[#030213]",
    background: "bg-[#ECEEF2]",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold",
        config.background
      )}
    >
      <span className={cn("mr-1.5 h-2 w-2 rounded-full", config.dot)} />
      <span className={config.text}>{status}</span>
    </div>
  );
}