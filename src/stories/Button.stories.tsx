import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Mail, Loader2 } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = { args: { children: 'Button' } }
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary' } }
export const Outline: Story = { args: { variant: 'outline', children: 'Outline' } }
export const Destructive: Story = { args: { variant: 'destructive', children: 'Delete' } }
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost' } }
export const WithIcon: Story = {
  args: { children: (<><Mail /> Send email</>) as React.ReactNode },
}
export const Loading: Story = {
  args: {
    disabled: true,
    children: (<><Loader2 className="animate-spin" /> Please wait</>) as React.ReactNode,
  },
}
