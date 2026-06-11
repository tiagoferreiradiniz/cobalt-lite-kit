import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface StatusBarItem {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: "online" | "offline" | "connecting" | "away"
  statusText?: string
  loading?: { percentage?: number; label?: string }
  items?: StatusBarItem[]
}

const statusDotColor: Record<NonNullable<StatusBarProps["status"]>, string> = {
  online: "#339e4d",
  offline: "#9ca3af",
  connecting: "#f59e0b",
  away: "#f59e0b",
}

/**
 * @example
 * ```tsx
 * <StatusBar />
 * ```
 */
function StatusBar({
  status = "online",
  statusText = "Ready to connect (secure connection).",
  loading,
  items = [],
  className,
  ...props
}: StatusBarProps) {
  const hasRight = !!loading || items.length > 0

  return (
    <div
      data-slot="status-bar"
      className={cn(
        "flex h-10 w-full items-center gap-4 border-t border-[#edeff5] bg-background pl-7 pr-4 dark:border-[#2a2a2e]",
        className
      )}
      {...props}
    >
      {/* Left: connection status */}
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <span
          className="h-2 w-2 shrink-0 rounded-full border border-white dark:border-[#1a1a1e]"
          style={{ backgroundColor: statusDotColor[status] }}
        />
        <span className="truncate text-[12px] leading-4 tracking-[0px] text-muted-foreground">
          {statusText}
        </span>
      </div>

      {/* Right: loader + items */}
      {hasRight && (
        <div className="flex shrink-0 items-stretch gap-2">
          {loading && (
            <>
              <div className="flex items-center gap-1">
                <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
                <span className="text-[12px] font-semibold leading-4 text-foreground">
                  {loading.percentage ?? 0}%
                </span>
                {loading.label && (
                  <span className="text-[12px] leading-4 text-muted-foreground">
                    {loading.label}
                  </span>
                )}
              </div>
              {items.length > 0 && (
                <div className="w-px self-stretch bg-[#edeff5] dark:bg-[#2a2a2e]" />
              )}
            </>
          )}

          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="w-px self-stretch bg-[#edeff5] dark:bg-[#2a2a2e]" />
              )}
              <button
                type="button"
                onClick={item.onClick}
                className={cn(
                  "flex items-center gap-1 rounded p-0.5 text-[12px] leading-4 text-muted-foreground transition-colors",
                  item.onClick && "hover:bg-[#EBEDF4] dark:hover:bg-[#323236]"
                )}
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
                  {item.icon}
                </span>
                <span className="whitespace-nowrap pr-1">{item.label}</span>
              </button>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

export { StatusBar }
