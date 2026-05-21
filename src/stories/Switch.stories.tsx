import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Switch> = { title: 'UI/Switch', component: Switch, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane" />
      <Label htmlFor="airplane">Airplane Mode</Label>
    </div>
  ),
}

export const Settings: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {[
        { id: 'notif', label: 'Push notifications' },
        { id: 'email', label: 'Email digest' },
        { id: 'sms', label: 'SMS alerts' },
      ].map(({ id, label }) => (
        <div key={id} className="flex items-center justify-between rounded-lg border p-4 w-[300px]">
          <Label htmlFor={id} className="cursor-pointer">{label}</Label>
          <Switch id={id} />
        </div>
      ))}
    </div>
  ),
}
