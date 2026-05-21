import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search'] },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = { args: { placeholder: 'Enter text…' } }
export const WithLabel: Story = {
  render: () => (
    <div className="grid gap-1.5 w-64">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="m@example.com" />
    </div>
  ),
}
export const Disabled: Story = { args: { placeholder: 'Disabled', disabled: true } }
export const Password: Story = { args: { type: 'password', placeholder: 'Password' } }
