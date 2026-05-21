import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof RadioGroup> = { title: 'UI/RadioGroup', component: RadioGroup, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="o1" />
        <Label htmlFor="o1">Option one</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="o2" />
        <Label htmlFor="o2">Option two</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="o3" />
        <Label htmlFor="o3">Option three</Label>
      </div>
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="flex gap-4">
      {['Card', 'PayPal', 'Apple'].map((v) => (
        <div key={v} className="flex items-center gap-2">
          <RadioGroupItem value={v.toLowerCase()} id={v} />
          <Label htmlFor={v}>{v}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}
