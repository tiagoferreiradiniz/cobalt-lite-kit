import * as React from "react"
import { ChevronDown, Columns3, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export type ToolbarPivot = {
  label: string
  icon?: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}

export type ToolbarProps = {
  pivots?: ToolbarPivot[]
  searchPlaceholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  showColumns?: boolean
  onColumnsClick?: () => void
  className?: string
}

function Toolbar({
  pivots = [],
  searchPlaceholder = "Search",
  searchValue,
  onSearchChange,
  showColumns = true,
  onColumnsClick,
  className,
}: ToolbarProps) {
  return (
    <div
      data-slot="toolbar"
      className={cn(
        "bg-background flex w-full items-center justify-between gap-1 border-b border-[#edeff5] px-5 py-1 dark:border-white/[0.08]",
        className
      )}
    >
      {/* Left: pivot tabs */}
      <div className="flex flex-1 items-center gap-0.5 min-w-0">
        {pivots.map((pivot, i) => (
          <Button
            key={i}
            variant="ghost"
            onClick={pivot.onClick}
            data-active={pivot.isActive || undefined}
            className={cn(
              "h-8 gap-1 rounded px-2 text-xs font-normal [&_svg:not([class*='size-'])]:size-5",
              pivot.isActive && "bg-muted text-foreground"
            )}
          >
            {pivot.icon}
            {pivot.label}
          </Button>
        ))}
      </div>

      {/* Right: search + columns */}
      <div className="flex shrink-0 items-center gap-1">
        <div className="relative w-[200px]">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="h-8 pl-8 text-sm"
          />
        </div>
        {showColumns && (
          <Button
            variant="ghost"
            onClick={onColumnsClick}
            className="h-8 gap-1 rounded px-2 text-xs font-normal [&_svg:not([class*='size-'])]:size-5"
          >
            <Columns3 />
            Columns
            <ChevronDown className="size-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

export { Toolbar }
