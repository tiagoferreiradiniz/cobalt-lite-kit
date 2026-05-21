import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Command, CommandEmpty, CommandGroup, CommandInput,
  CommandItem, CommandList, CommandSeparator, CommandShortcut,
} from '@/components/ui/command'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'

const meta: Meta = { title: 'UI/Command', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[400px]">
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem><Calendar className="mr-2 h-4 w-4" />Calendar</CommandItem>
          <CommandItem><Smile className="mr-2 h-4 w-4" />Search Emoji</CommandItem>
          <CommandItem><Calculator className="mr-2 h-4 w-4" />Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem><User className="mr-2 h-4 w-4" />Profile<CommandShortcut>⌘P</CommandShortcut></CommandItem>
          <CommandItem><CreditCard className="mr-2 h-4 w-4" />Billing<CommandShortcut>⌘B</CommandShortcut></CommandItem>
          <CommandItem><Settings className="mr-2 h-4 w-4" />Settings<CommandShortcut>⌘S</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
