import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupButton } from '@/components/ui/input-group'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

const meta: Meta = { title: 'UI/InputGroup', tags: ['autodocs'] }
export default meta

export const WithPrefix: StoryObj = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
}

export const WithButton: StoryObj = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupInput placeholder="Search…" />
      <InputGroupAddon>
        <InputGroupButton>
          <Button size="sm"><Search className="h-4 w-4" /></Button>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const BothSides: StoryObj = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon><InputGroupText>$</InputGroupText></InputGroupAddon>
      <InputGroupInput placeholder="0.00" type="number" />
      <InputGroupAddon><InputGroupText>USD</InputGroupText></InputGroupAddon>
    </InputGroup>
  ),
}
