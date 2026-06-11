"use client"

import { Collapsible as CollapsiblePrimitive } from "radix-ui"

/**
 * @example
 * ```tsx
 * <Collapsible className="w-[350px] space-y-2">
 *   <div className="flex items-center justify-between px-4">
 *     <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
 *     <CollapsibleTrigger asChild>
 *       <Button variant="ghost" size="icon">
 *         <ChevronsUpDown className="h-4 w-4" />
 *       </Button>
 *     </CollapsibleTrigger>
 *   </div>
 *   <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
 *   <CollapsibleContent className="space-y-2">
 *     <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
 *     <div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
 *   </CollapsibleContent>
 * </Collapsible>
 * ```
 */
function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
