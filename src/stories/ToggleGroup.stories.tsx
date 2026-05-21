import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

const meta: Meta = { title: 'UI/ToggleGroup', tags: ['autodocs'] }
export default meta

export const Single: StoryObj = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: StoryObj = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: StoryObj = {
  render: () => (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
}
