import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * @example
 * ```tsx
 * <div className="w-[300px]">
 *   <div className="space-y-1">
 *     <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
 *     <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
 *   </div>
 *   <Separator className="my-4" />
 *   <div className="flex h-5 items-center gap-4 text-sm">
 *     <div>Blog</div>
 *     <Separator orientation="vertical" />
 *     <div>Docs</div>
 *     <Separator orientation="vertical" />
 *     <div>Source</div>
 *   </div>
 * </div>
 * ```
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
