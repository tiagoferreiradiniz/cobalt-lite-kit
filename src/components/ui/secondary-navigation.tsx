import * as React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SecondaryNavItem {
  id: string
  label: string
  icon?: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}

export interface SecondaryNavSection {
  id: string
  title: string
  items: SecondaryNavItem[]
  defaultCollapsed?: boolean
}

export interface SecondaryNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  sections: SecondaryNavSection[]
  activeItemId?: string
  onItemClick?: (itemId: string) => void
}

/**
 * @example
 * ```tsx
 * <SecondaryNavigation
 *   sections={[
 *     {
 *       id: 'company',
 *       title: 'Company',
 *       items: [
 *         { id: 'general', label: 'General', icon: <Settings /> },
 *         { id: 'organization', label: 'Organization', icon: <Building /> },
 *         { id: 'integrations', label: 'Integrations', icon: <Plug /> },
 *       ],
 *     },
 *     {
 *       id: 'users',
 *       title: 'Users',
 *       items: [
 *         { id: 'users', label: 'Users', icon: <Users /> },
 *         { id: 'roles', label: 'Roles', icon: <Shield /> },
 *       ],
 *     },
 *   ]}
 *   activeItemId="general"
 *   onItemClick={(id) => console.log(id)}
 * />
 * ```
 */
function SecondaryNavigation({
  sections,
  activeItemId,
  onItemClick,
  className,
  ...props
}: SecondaryNavigationProps) {
  const [collapsedSections, setCollapsedSections] = React.useState<Set<string>>(
    () => new Set(sections.filter((s) => s.defaultCollapsed).map((s) => s.id))
  )

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  return (
    <div
      data-slot="secondary-navigation"
      className={cn(
        "relative flex min-w-[263px] max-w-[263px] items-start bg-background",
        className
      )}
      {...props}
    >
      <div className="flex w-[263px] shrink-0 flex-col items-start px-2 pt-3">
        {sections.map((section) => {
          const isCollapsed = collapsedSections.has(section.id)
          return (
            <div
              key={section.id}
              data-slot="secondary-navigation-section"
              className="flex w-full max-w-[256px] shrink-0 flex-col items-start pb-0.5"
            >
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                className="flex w-full max-w-[256px] shrink-0 flex-col items-start rounded-[6px] py-2 pl-1 pr-4 transition-colors hover:bg-[#EBEDF4] dark:hover:bg-[#323236]"
              >
                <div className="flex w-full items-center gap-2">
                  <div className="flex min-w-0 flex-1 items-center gap-1">
                    <span className="flex h-3 w-3 shrink-0 items-center justify-center">
                      {isCollapsed ? (
                        <ChevronRight className="h-3 w-3 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-3 w-3 text-muted-foreground" />
                      )}
                    </span>
                    <span className="whitespace-nowrap text-[12px] font-medium uppercase leading-4 tracking-[0px] text-muted-foreground">
                      {section.title}
                    </span>
                  </div>
                </div>
              </button>

              {!isCollapsed && (
                <div className="flex w-full shrink-0 flex-col gap-0.5 overflow-clip pb-1.5">
                  {section.items.map((item) => {
                    const isActive = item.isActive || item.id === activeItemId
                    return (
                      <button
                        key={item.id}
                        type="button"
                        data-active={isActive || undefined}
                        onClick={() => {
                          item.onClick?.()
                          onItemClick?.(item.id)
                        }}
                        className={cn(
                          "flex w-full max-w-[256px] shrink-0 flex-col items-start rounded-[6px] py-1.5 pl-5 pr-3 text-left transition-colors",
                          isActive
                            ? "bg-[#ECEFFE] dark:bg-[#0E1972] text-[#2747D0] dark:text-[#8CA0F0] font-medium active:bg-[#D8DCF8] dark:active:bg-[#0A1060]"
                            : "text-muted-foreground hover:bg-[#EBEDF4] dark:hover:bg-[#323236] hover:text-foreground active:bg-[#DDE0FA] dark:active:bg-[#0E1260]"
                        )}
                      >
                        <div className="flex w-full items-center">
                          <div className="flex min-w-0 flex-1 items-center gap-2">
                            {item.icon && (
                              <span className="flex shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
                                {item.icon}
                              </span>
                            )}
                            <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-normal leading-5 tracking-[0px]">
                              {item.label}
                            </span>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Right border divider */}
      <div
        className="relative w-px self-stretch shrink-0"
        style={{ backgroundColor: "#edeff5" }}
      />

      {/* Collapse controller indicator */}
      <div className="absolute right-[-3px] top-1/2 flex -translate-y-1/2 items-center">
        <div
          className="h-9 w-1 rounded-br-[9px] rounded-tr-[9px]"
          style={{ backgroundColor: "#d3d5db" }}
        />
      </div>
    </div>
  )
}

export { SecondaryNavigation }
