import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  PrimaryNavigation,
  PrimaryNavigationCollapseIndicator,
  PrimaryNavigationContent,
  PrimaryNavigationFooter,
  PrimaryNavigationGroup,
  PrimaryNavigationGroupContent,
  PrimaryNavigationHeader,
  PrimaryNavigationMenu,
  PrimaryNavigationMenuButton,
  PrimaryNavigationMenuItem,
  PrimaryNavigationProvider,
  PrimaryNavigationSeparator,
  PrimaryNavigationTrigger,
} from '@/components/ui/primary-navigation'
import { ArrowLeftRight, CircleHelp, MessagesSquare, MonitorSmartphone, MoreHorizontal } from 'lucide-react'
import { TeamViewerLogo } from '@/components/ui/teamviewer-logo'
import { AdminSettingsIcon } from '@/components/ui/icons/admin-settings-icon'

const navItems = [
  { id: 'remote-support', title: 'Remote Support', icon: ArrowLeftRight, url: '#' },
  { id: 'devices', title: 'Devices & Contacts', icon: MonitorSmartphone, url: '#' },
  { id: 'chat', title: 'Chat', icon: MessagesSquare, url: '#' },
  { id: 'more', title: 'More solutions', icon: MoreHorizontal, url: '#' },
]

const bottomItems = [
  { id: 'admin', title: 'Admin Settings', icon: AdminSettingsIcon, url: '#' },
  { id: 'help', title: 'Help', icon: CircleHelp, url: '#' },
]

const meta: Meta = { title: 'UI/PrimaryNavigation', tags: ['autodocs'] }
export default meta

function NavShell({ defaultActive = 'remote-support' }: { defaultActive?: string }) {
  const [activeId, setActiveId] = React.useState(defaultActive)

  return (
    <PrimaryNavigationProvider className="min-h-[500px]">
      <PrimaryNavigation collapsible="icon">
        <PrimaryNavigationCollapseIndicator />
        <PrimaryNavigationHeader className="p-4 group-data-[collapsible=icon]:p-2">
          <TeamViewerLogo />
        </PrimaryNavigationHeader>
        <PrimaryNavigationSeparator />
        <PrimaryNavigationContent>
          <PrimaryNavigationGroup className="pt-3">
            <PrimaryNavigationGroupContent>
              <PrimaryNavigationMenu>
                {navItems.map(({ id, title, icon: Icon, url }) => (
                  <PrimaryNavigationMenuItem key={id}>
                    <PrimaryNavigationMenuButton
                      asChild
                      isActive={activeId === id}
                      onClick={() => setActiveId(id)}
                    >
                      <a href={url}><Icon className="h-4 w-4" /><span>{title}</span></a>
                    </PrimaryNavigationMenuButton>
                  </PrimaryNavigationMenuItem>
                ))}
              </PrimaryNavigationMenu>
            </PrimaryNavigationGroupContent>
          </PrimaryNavigationGroup>
        </PrimaryNavigationContent>
        <PrimaryNavigationFooter className="pb-4">
          <PrimaryNavigationGroup className="p-0">
            <PrimaryNavigationGroupContent>
              <PrimaryNavigationMenu>
                {bottomItems.map(({ id, title, icon: Icon, url }) => (
                  <PrimaryNavigationMenuItem key={id}>
                    <PrimaryNavigationMenuButton
                      asChild
                      isActive={activeId === id}
                      onClick={() => setActiveId(id)}
                    >
                      <a href={url}><Icon className="h-4 w-4" /><span>{title}</span></a>
                    </PrimaryNavigationMenuButton>
                  </PrimaryNavigationMenuItem>
                ))}
              </PrimaryNavigationMenu>
            </PrimaryNavigationGroupContent>
          </PrimaryNavigationGroup>
        </PrimaryNavigationFooter>
      </PrimaryNavigation>
      <main className="flex-1 p-6">
        <PrimaryNavigationTrigger className="mb-4" />
        <p className="text-muted-foreground text-sm">Main content area. Toggle the navigation with the button above or ⌘B.</p>
      </main>
    </PrimaryNavigationProvider>
  )
}

export const Default: StoryObj = {
  render: () => <NavShell />,
}

export const ActiveItem: StoryObj = {
  render: () => <NavShell defaultActive="devices" />,
}
