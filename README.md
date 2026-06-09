# @cobalt-kits/cobalt-lite-kit

A shadcn-based React component library packaged as a [Figma Make](https://www.figma.com/make/) kit. Built on Radix UI, Base UI, and Tailwind CSS v4.

## Install

The package is published to a private Figma npm registry. Configure your scope in `.npmrc`:

```
@cobalt-kits:registry=https://registry.figma.com/npm/8492c267-bee7-4d8c-a2fb-e03c534a2c33/registry/
//registry.figma.com/npm/8492c267-bee7-4d8c-a2fb-e03c534a2c33/registry/:_authToken=<your-token>
```

Then install:

```sh
npm install @cobalt-kits/cobalt-lite-kit
```

### Peer dependencies

You must install `react` and `react-dom` (18 or 19) in the consuming app. The kit also expects the following runtime dependencies to be resolvable — in Figma Make these are provided by the runtime; in a custom host install them alongside:

`@base-ui/react`, `@tanstack/react-table`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `lucide-react`, `radix-ui`, `react-day-picker`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`.

## Usage

```tsx
import "@cobalt-kits/cobalt-lite-kit/styles";
import { Button, Card, CardContent } from "@cobalt-kits/cobalt-lite-kit";

export function Example() {
  return (
    <Card>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

The styles import registers the Tailwind v4 theme and all token CSS variables. Import it once, at your app's entry.

### Dark mode

The kit uses class-based dark mode (`@custom-variant dark (&:is(.dark *))`). Toggle the `.dark` class on a parent (typically `<html>` or `<body>`) — `next-themes` works out of the box.

## What's inside

65 components in `src/components/ui/`, re-exported from the package root. Coverage mirrors shadcn with the `radix-nova` style preset, plus a few additions:

- **Form & inputs:** `Button`, `Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Select`, `NativeSelect`, `Combobox`, `Switch`, `Slider`, `InputOTP`, `Label`, `Field`, `InputGroup`, `ButtonGroup`
- **Overlays:** `Dialog`, `AlertDialog`, `Drawer`, `Sheet`, `Popover`, `HoverCard`, `Tooltip`, `ContextMenu`, `DropdownMenu`, `Menubar`, `Command`
- **Navigation:** `NavigationMenu`, `Breadcrumb`, `Pagination`, `Tabs`, `PrimaryNavigation`, `SecondaryNavigation`, `TopBar`, `Toolbar`
- **Data display:** `Table`, `DataTable`, `Card`, `Avatar`, `Badge`, `Chart`, `Calendar`, `DatePicker`, `Accordion`, `Carousel`, `Progress`, `Skeleton`, `Spinner`, `Alert`, `Empty`, `Item`, `Kbd`, `Typography`, `StatusBar`, `PageHeader`
- **Layout:** `ScrollArea`, `Separator`, `Resizable`, `AspectRatio`, `Collapsible`, `Toggle`, `ToggleGroup`, `Direction`
- **Utilities:** `cn` (clsx + tailwind-merge), `useIsMobile` hook, `Toaster` (sonner)

## Local development

```sh
npm install
npm run storybook   # Storybook on http://localhost:6006
npm run build       # tsc + vite library build → dist/
npm run lint
```

Stories live in `src/stories/` (one per component) and run against the Storybook a11y, docs, and vitest browser-test addons.

## Publishing

```sh
npm version patch    # or minor / major
npm publish          # runs prepublishOnly → build → publish to Figma registry
```

The build emits ESM + CJS bundles, a single `dist/style.css`, and TypeScript types. Peer/runtime deps are externalized in `vite.config.ts` to keep the bundle compatible with the Figma Make runtime.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
