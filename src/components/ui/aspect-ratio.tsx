"use client"

import { AspectRatio as AspectRatioPrimitive } from "radix-ui"

/**
 * @example
 * ```tsx
 * <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
 *   <img
 *     src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800"
 *     alt="Photo"
 *     className="h-full w-full object-cover"
 *   />
 * </AspectRatio>
 * ```
 */
function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
