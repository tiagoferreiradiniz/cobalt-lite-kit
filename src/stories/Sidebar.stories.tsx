import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarHeader, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, SidebarProvider, SidebarTrigger, SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { ArrowLeftRight, MonitorSmartphone, MessagesSquare, MoreHorizontal, CircleHelp } from 'lucide-react'
import { TeamViewerLogo } from '@/components/ui/teamviewer-logo'
import { AdminSettingsIcon } from '@/components/ui/icons/admin-settings-icon'

const navItems = [
  { title: 'Remote Support', icon: ArrowLeftRight, url: '#' },
  { title: 'Devices & Contacts', icon: MonitorSmartphone, url: '#' },
  { title: 'Chat', icon: MessagesSquare, url: '#' },
  { title: 'More solutions', icon: MoreHorizontal, url: '#' },
]

const bottomItems = [
  { title: 'Admin Settings', icon: AdminSettingsIcon, url: '#' },
  { title: 'Help', icon: CircleHelp, url: '#' },
]

const meta: Meta = { title: 'UI/Sidebar', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <SidebarProvider className="min-h-[500px]">
      <Sidebar>
        <SidebarHeader className="p-4">
          <TeamViewerLogo />
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup className="pt-3">
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map(({ title, icon: Icon, url }) => (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild>
                      <a href={url}><Icon className="h-4 w-4" /><span>{title}</span></a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="pb-4">
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarMenu>
                {bottomItems.map(({ title, icon: Icon, url }) => (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild>
                      <a href={url}><Icon className="h-4 w-4" /><span>{title}</span></a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-6">
        <SidebarTrigger className="mb-4" />
        <p className="text-muted-foreground text-sm">Main content area. Toggle the sidebar with the button above or ⌘B.</p>
      </main>
    </SidebarProvider>
  ),
}
