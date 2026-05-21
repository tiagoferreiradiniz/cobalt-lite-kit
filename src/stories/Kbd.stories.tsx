import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd } from '@/components/ui/kbd'

const meta: Meta<typeof Kbd> = { title: 'UI/Kbd', component: Kbd, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = { render: () => <Kbd>⌘K</Kbd> }

export const Combination: Story = {
  render: () => (
    <div className="flex items-center gap-1 text-sm">
      Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open
    </div>
  ),
}

export const Common: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {['⌘', '⌥', '⇧', '⌃', 'Enter', 'Esc', 'Tab', '↑', '↓', '←', '→'].map((k) => (
        <Kbd key={k}>{k}</Kbd>
      ))}
    </div>
  ),
}
