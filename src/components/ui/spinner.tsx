import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"

/**
 * @example
 * ```tsx
 * <Spinner className="h-4 w-4" />
 * ```
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />
  )
}

export { Spinner }
