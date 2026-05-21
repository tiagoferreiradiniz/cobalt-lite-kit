import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Sheet, SheetContent, SheetDescription, SheetFooter,
  SheetHeader, SheetTitle, SheetTrigger, SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta: Meta = { title: 'UI/Sheet', tags: ['autodocs'] }
export default meta

export const Right: StoryObj = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="s-name" className="text-right">Name</Label>
            <Input id="s-name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="s-username" className="text-right">Username</Label>
            <Input id="s-username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild><Button type="submit">Save changes</Button></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Left: StoryObj = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open Left Sheet</Button></SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>App navigation links.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 py-4">
          {['Home', 'Dashboard', 'Settings', 'Profile'].map((link) => (
            <a key={link} href="#" className="text-sm hover:underline">{link}</a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  ),
}
