import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

const meta: Meta = { title: 'UI/ButtonGroup', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">One</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Two</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Three</Button>
    </ButtonGroup>
  ),
}

export const Formatting: StoryObj = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon"><Bold className="h-4 w-4" /></Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon"><Italic className="h-4 w-4" /></Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon"><Underline className="h-4 w-4" /></Button>
    </ButtonGroup>
  ),
}

export const WithText: StoryObj = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>https://</ButtonGroupText>
      <Button variant="outline">example.com</Button>
    </ButtonGroup>
  ),
}

export const Alignment: StoryObj = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon"><AlignLeft className="h-4 w-4" /></Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon"><AlignCenter className="h-4 w-4" /></Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon"><AlignRight className="h-4 w-4" /></Button>
    </ButtonGroup>
  ),
}
