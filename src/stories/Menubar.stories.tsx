import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu,
  MenubarRadioGroup, MenubarRadioItem, MenubarSeparator,
  MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger,
} from '@/components/ui/menubar'

const meta: Meta = { title: 'UI/Menubar', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab<MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
          <MenubarItem>New Window<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print…<MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo<MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
          <MenubarItem>Redo<MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarItem>Find…</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value="bottom">
            <MenubarRadioItem value="top">Show Tab Bar at Top</MenubarRadioItem>
            <MenubarRadioItem value="bottom">Show Tab Bar at Bottom</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
