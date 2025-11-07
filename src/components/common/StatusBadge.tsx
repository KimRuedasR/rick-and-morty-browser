import { cn } from "@/lib/utils";
import type { CharacterStatus } from "@/types/character";

interface StatusBadgeProps {
  status: CharacterStatus;
}

const statusConfig: Record<CharacterStatus, { color: string; label: string }> = {
  Alive: { color: "bg-green-500", label: "Alive" },
  Dead: { color: "bg-red-500", label: "Dead" },
  unknown: { color: "bg-gray-400", label: "Unknown" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium">
      <span className={cn("h-2 w-2 rounded-full", config.color)} />
      <span className="capitalize text-muted-foreground">{config.label}</span>
    </div>
  );
}