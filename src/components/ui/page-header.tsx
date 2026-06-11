import * as React from "react"

import { cn } from "@/lib/utils"

export type PageHeaderProps = {
  title: string
  description?: string
  actions?: React.ReactNode
  className?: string
}

/**
 * @example
 * ```tsx
 * <PageHeader
 *   title="Title"
 *   description="Additional info in here. Caution!! May include amazingly written text."
 *   actions={
 *     <Button size="sm">
 *       <Plus />
 *       String
 *     </Button>
 *   }
 * />
 * ```
 */
function PageHeader({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      data-slot="page-header"
      className={cn(
        "bg-background flex w-full flex-col items-start",
        className
      )}
    >
      <div className="flex w-full items-center gap-6 px-7 pb-2">
        <div className="flex min-w-0 flex-1 flex-col items-start">
          <span className="text-foreground text-xl font-medium leading-7 tracking-normal">
            {title}
          </span>
          {description && (
            <span className="text-muted-foreground w-full truncate text-sm leading-5">
              {description}
            </span>
          )}
        </div>
        {actions && (
          <div className="flex shrink-0 items-center gap-2 self-stretch">
            {actions}
          </div>
        )}
      </div>
      <div className="h-px w-full shrink-0 bg-[#edeff5] dark:bg-white/[0.08]" />
    </div>
  )
}

export { PageHeader }
