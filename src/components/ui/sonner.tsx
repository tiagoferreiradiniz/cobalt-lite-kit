import * as React from "react"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

function useDarkMode() {
  const [dark, setDark] = React.useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  )
  React.useEffect(() => {
    const observer = new MutationObserver(() =>
      setDark(document.documentElement.classList.contains("dark"))
    )
    observer.observe(document.documentElement, { attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])
  return dark ? "dark" : "light"
}

/**
 * @example
 * ```tsx
 * <div>
 *   <Toaster />
 *   <div className="flex flex-wrap gap-2">
 *     <Button variant="outline" onClick={() => toast('Event has been created.')}>Default</Button>
 *     <Button variant="outline" onClick={() => toast.success('Profile updated successfully!')}>Success</Button>
 *     <Button variant="outline" onClick={() => toast.error('Something went wrong.')}>Error</Button>
 *     <Button variant="outline" onClick={() => toast.warning('Low disk space.')}>Warning</Button>
 *     <Button variant="outline" onClick={() => toast.info('New version available.')}>Info</Button>
 *     <Button variant="outline" onClick={() => toast.loading('Uploading file…')}>Loading</Button>
 *     <Button
 *       variant="outline"
 *       onClick={() =>
 *         toast('File uploaded', {
 *           description: 'Monday, January 3rd at 6:00pm',
 *           action: { label: 'Undo', onClick: () => console.log('Undo') },
 *         })
 *       }
 *     >
 *       With action
 *     </Button>
 *   </div>
 * </div>
 * ```
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useDarkMode()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
