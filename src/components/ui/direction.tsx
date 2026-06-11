"use client"

import * as React from "react"
import { Direction } from "radix-ui"

/**
 * @example
 * ```tsx
 * <DirectionProvider dir="ltr">
 *   <div className="flex gap-2 w-[300px]">
 *     <Input placeholder="Left-to-right input" />
 *     <Button variant="outline">Send</Button>
 *   </div>
 * </DirectionProvider>
 * ```
 */
function DirectionProvider({
  dir,
  direction,
  children,
}: React.ComponentProps<typeof Direction.DirectionProvider> & {
  direction?: React.ComponentProps<typeof Direction.DirectionProvider>["dir"]
}) {
  return (
    <Direction.DirectionProvider dir={direction ?? dir}>
      {children}
    </Direction.DirectionProvider>
  )
}

const useDirection = Direction.useDirection

export { DirectionProvider, useDirection }
