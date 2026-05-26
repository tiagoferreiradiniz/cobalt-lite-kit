import { Bell, ChevronLeft, ChevronRight, Search, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export type TopBarProps = {
  title?: string
  onBack?: () => void
  onForward?: () => void
  searchPlaceholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  newInterfaceEnabled?: boolean
  onNewInterfaceChange?: (checked: boolean) => void
  avatarSrc?: string
  avatarFallback?: string
  isOnline?: boolean
  onSettingsClick?: () => void
  onNotificationsClick?: () => void
  className?: string
}

function TopBar({
  title = "Module title",
  onBack,
  onForward,
  searchPlaceholder = "Search and connect",
  searchValue,
  onSearchChange,
  newInterfaceEnabled = true,
  onNewInterfaceChange,
  avatarSrc,
  avatarFallback = "TD",
  isOnline = true,
  onSettingsClick,
  onNotificationsClick,
  className,
}: TopBarProps) {
  return (
    <div
      data-slot="top-bar"
      className={cn(
        "bg-background flex w-full flex-col items-start rounded-tl-3xl",
        className
      )}
    >
      {/* Nav row — 3-column flex so center never overlaps right panel */}
      <div className="flex w-full items-center px-6 py-2 gap-1">
        {/* Left: module title */}
        <div className="flex flex-1 items-center min-w-[200px] overflow-hidden">
          <span className="truncate text-base font-semibold text-foreground">
            {title}
          </span>
        </div>

        {/* Center: nav arrows + search */}
        <div className="flex shrink-0 items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            className="size-10 rounded-lg [&_svg]:size-5"
            onClick={onBack}
            aria-label="Navigate back"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="size-10 rounded-lg [&_svg]:size-5"
            onClick={onForward}
            aria-label="Navigate forward"
          >
            <ChevronRight />
          </Button>
          <InputGroup className="w-[290px]">
            <InputGroupAddon align="inline-start">
              <Search />
            </InputGroupAddon>
            <InputGroupInput
              type="search"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="text-center placeholder:text-center"
            />
            <InputGroupAddon align="inline-end">
              <Kbd>Ctrl + K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Right: new interface toggle + icon actions + avatar */}
        <div className="flex flex-1 items-center justify-end gap-1">
          <div className="flex items-center gap-2">
            <Label
              htmlFor="top-bar-new-interface"
              className="cursor-pointer whitespace-nowrap text-sm font-normal"
            >
              New interface
            </Label>
            <Switch
              id="top-bar-new-interface"
              defaultChecked={newInterfaceEnabled}
              onCheckedChange={onNewInterfaceChange}
            />
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            className="size-10 rounded-lg [&_svg]:size-5"
            onClick={onSettingsClick}
            aria-label="Settings"
          >
            <Settings />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="size-10 rounded-lg [&_svg]:size-5"
            onClick={onNotificationsClick}
            aria-label="Notifications"
          >
            <Bell />
          </Button>
          <Avatar size="sm" className="ml-0.5 after:hidden">
            {avatarSrc && <AvatarImage src={avatarSrc} alt="User avatar" />}
            <AvatarFallback>{avatarFallback}</AvatarFallback>
            {isOnline && (
              <AvatarBadge className="bg-[#339e4d] ring-background" />
            )}
          </Avatar>
        </div>
      </div>

      {/* Bottom divider — Figma semantic/border/primary #edeff5 */}
      <div className="h-px w-full shrink-0 bg-[#edeff5] dark:bg-white/[0.08]" />
    </div>
  )
}

export { TopBar }
