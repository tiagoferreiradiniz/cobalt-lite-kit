# Changelog

## [0.3.2] - 2026-06-09

### Fixed
- `PrimaryNavigationMenuButton`'s tooltip path now wraps its `Tooltip` in a `TooltipProvider`, fixing the runtime error "`Tooltip` must be used within `TooltipProvider`" when a menu button is rendered with the `tooltip` prop. Mirrors the same fix already shipped in `PrimaryNavigationCollapseIndicator` in 0.3.0

## [0.3.1] - 2026-06-09

### Changed
- `PrimaryNavigation` now renders inline at all viewport sizes. Removed the `<Sheet>` off-canvas branch and the `hidden md:block` / `hidden md:flex` viewport gates that were blanking the component below 768px (notably in Figma Make previews)
- `PrimaryNavigationCollapseIndicator` no longer returns `null` on mobile and no longer carries `hidden md:flex`
- `PrimaryNavigationMenuButton` tooltip is no longer suppressed on small viewports — it now shows whenever the nav is collapsed, regardless of width

### Removed
- Unused `Sheet`/`SheetContent`/`SheetHeader`/`SheetTitle`/`SheetDescription` imports and the `PRIMARY_NAVIGATION_WIDTH_MOBILE` constant from `primary-navigation.tsx`

## [0.3.0] - 2026-06-09

### Added
- `PrimaryNavigationCollapseIndicator` — a chevron tab that floats on the sidebar edge to toggle collapse/expand. Includes a "Collapse"/"Expand" tooltip and a 4px hover slide-out animation
- Custom Fluent-style `ChevronLeftIcon` and `ChevronRightIcon` in `src/components/ui/icons/` (replace lucide chevrons in the collapse indicator)

### Changed
- **BREAKING** `TeamViewerLogo` is now composed of two SVGs (icon + wordmark) in a flex container. The wordmark auto-hides via `group-data-[state=collapsed]:hidden` when nested inside a collapsed `PrimaryNavigation`. Fills changed from `white` to `currentColor`
- `PrimaryNavigation` icon-mode width bumped from `3rem` to `3.5rem` (56px) to match the Figma design system
- `PrimaryNavigationMenuButton` in icon mode is now 40×40 (`size-10`) with 20×20 icons (`size-5`), up from 32×32 / 16×16
- Active menu item background uses `bg-sidebar-accent` (`rgba(39,71,208,0.75)`) instead of solid `bg-sidebar-primary`, matching the Figma `surface/shell/active` token
- `--sidebar-accent-hover` token aligned to `rgba(39,71,208,0.75)` (was `rgba(39,71,208,0.30)`)
- Stripped Vite-template demo CSS from `src/index.css` (`#root` width/centering, global `h1`/`h2`/`p`/`code` typography, `@media (prefers-color-scheme: dark)` block). Only shadcn tokens, `@theme inline`, `.dark` overrides, and `@layer base` remain
- Rewrote `README.md` with install, usage, Figma Make notes, and component inventory (replaces the Vite template boilerplate)

### Fixed
- `PrimaryNavigationCollapseIndicator` now wraps its `Tooltip` in a `TooltipProvider`, avoiding the "`Tooltip` must be used within `TooltipProvider`" runtime error
- Storybook `PrimaryNavigation` story now uses `collapsible="icon"` and composes the collapse indicator so both states are exercised

## [0.2.2] - 2026-05-28

### Changed
- Renamed package scope from `@teamviewer` to `@cobalt-kits` — package is now `@cobalt-kits/cobalt-lite-kit`
- Externalized `@base-ui/react`, `sonner`, `lucide-react`, and `date-fns` to fix Dynamic require errors in Figma Make

## [0.2.1] - 2026-05-28

### Changed
- Excluded stories and internal files from published TypeScript types

## [0.2.0] - 2026-05-28

### Added
- Initial release to Figma private npm registry
- Configured package for Figma Make compatibility (ESM + CJS builds, CSS bundled, externalized peer deps)
