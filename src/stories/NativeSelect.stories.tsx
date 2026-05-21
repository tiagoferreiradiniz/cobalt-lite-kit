import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect } from '@/components/ui/native-select'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof NativeSelect> = { title: 'UI/NativeSelect', component: NativeSelect, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof NativeSelect>

export const Default: Story = {
  render: () => (
    <NativeSelect className="w-[200px]">
      <option value="">Select a fruit</option>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="mango">Mango</option>
    </NativeSelect>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid gap-1.5 w-48">
      <Label htmlFor="fruit">Fruit</Label>
      <NativeSelect id="fruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="mango">Mango</option>
      </NativeSelect>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled className="w-[200px]">
      <option>Disabled select</option>
    </NativeSelect>
  ),
}
