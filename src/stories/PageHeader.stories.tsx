import type { Meta, StoryObj } from '@storybook/react-vite'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/ui/page-header'

const meta: Meta<typeof PageHeader> = {
  title: 'UI/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta
type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <PageHeader title="Title" />
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <PageHeader
        title="Title"
        description="Additional info in here. Caution!! May include amazingly written text."
      />
    </div>
  ),
}

export const WithActions: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <PageHeader
        title="Title"
        description="Additional info in here. Caution!! May include amazingly written text."
        actions={
          <Button size="sm">
            <Plus />
            String
          </Button>
        }
      />
    </div>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <PageHeader
        title="Connections"
        actions={
          <Button size="sm">
            <Plus />
            Add connection
          </Button>
        }
      />
    </div>
  ),
}
