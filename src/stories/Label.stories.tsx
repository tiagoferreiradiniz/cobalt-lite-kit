import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

const meta: Meta<typeof Label> = { title: 'UI/Label', component: Label, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = { render: () => <Label>Email address</Label> }

export const WithInput: Story = {
  render: () => (
    <div className="grid gap-1.5 w-64">
      <Label htmlFor="email-label">Email</Label>
      <Input id="email-label" type="email" placeholder="m@example.com" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="agree" />
      <Label htmlFor="agree">I agree to the terms</Label>
    </div>
  ),
}
