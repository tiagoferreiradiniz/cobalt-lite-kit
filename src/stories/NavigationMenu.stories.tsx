import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const meta: Meta = { title: 'UI/NavigationMenu', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a href="#" className="flex h-full w-full flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">cobalt-lite-kit</div>
                    <p className="text-sm leading-tight text-muted-foreground">A UI library built on shadcn.</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li><NavigationMenuLink asChild><a href="#" className="block rounded p-2 hover:bg-accent text-sm font-medium">Introduction</a></NavigationMenuLink></li>
              <li><NavigationMenuLink asChild><a href="#" className="block rounded p-2 hover:bg-accent text-sm font-medium">Installation</a></NavigationMenuLink></li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-4 grid-cols-2">
              {['Button', 'Input', 'Card', 'Dialog', 'Badge', 'Avatar'].map((c) => (
                <li key={c}><NavigationMenuLink asChild><a href="#" className="block rounded p-2 hover:bg-accent text-sm">{c}</a></NavigationMenuLink></li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">Docs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
