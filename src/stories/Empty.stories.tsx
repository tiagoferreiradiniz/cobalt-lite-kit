import type { Meta, StoryObj } from '@storybook/react-vite'
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty'
import { Button } from '@/components/ui/button'
import { Inbox } from 'lucide-react'

const meta: Meta = { title: 'UI/Empty', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <Empty className="w-[400px]">
      <EmptyHeader>
        <EmptyMedia><Inbox className="h-10 w-10 text-muted-foreground" /></EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>Your inbox is empty. Start a conversation to see messages here.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>New message</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const Simple: StoryObj = {
  render: () => (
    <Empty className="w-[300px]">
      <EmptyHeader>
        <EmptyTitle>Nothing here</EmptyTitle>
        <EmptyDescription>No items to display.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
