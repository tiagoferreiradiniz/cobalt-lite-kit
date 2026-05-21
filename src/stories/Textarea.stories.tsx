import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Textarea> = { title: 'UI/Textarea', component: Textarea, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = { args: { placeholder: 'Type your message here.' } }
export const Disabled: Story = { args: { placeholder: 'Disabled textarea', disabled: true } }

export const WithLabel: Story = {
  render: () => (
    <div className="grid gap-1.5 w-72">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
      <p className="text-sm text-muted-foreground">Your message will be sent to the team.</p>
    </div>
  ),
}

export const WithButton: Story = {
  render: () => (
    <div className="grid gap-2 w-72">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  ),
}
