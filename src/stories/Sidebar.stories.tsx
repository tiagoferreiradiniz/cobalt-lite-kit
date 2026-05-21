import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, SidebarProvider, SidebarTrigger, SidebarFooter,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Home, Settings, Users, BarChart2, FileText, LogOut } from 'lucide-react'

const navItems = [
  { title: 'Home', icon: Home, url: '#' },
  { title: 'Analytics', icon: BarChart2, url: '#' },
  { title: 'Team', icon: Users, url: '#' },
  { title: 'Documents', icon: FileText, url: '#' },
  { title: 'Settings', icon: Settings, url: '#' },
]

const meta: Meta = { title: 'UI/Sidebar', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <SidebarProvider className="min-h-[500px]">
      <Sidebar>
        <SidebarHeader className="p-4">
          <span className="font-semibold text-sm">Cobalt App</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
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
        <SidebarFooter className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback>TD</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-sm">
              <p className="font-medium">Tiago Diniz</p>
              <p className="text-muted-foreground text-xs">tiago@teamviewer.com</p>
            </div>
            <LogOut className="h-4 w-4 text-muted-foreground cursor-pointer" />
          </div>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-6">
        <SidebarTrigger className="mb-4" />
        <p className="text-muted-foreground text-sm">Main content area. Toggle the sidebar with the button above or ⌘B.</p>
      </main>
    </SidebarProvider>
  ),
}
