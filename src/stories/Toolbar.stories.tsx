import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heart, Star, Users } from 'lucide-react'
import { Toolbar } from '@/components/ui/toolbar'

const meta: Meta<typeof Toolbar> = {
  title: 'UI/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta
type Story = StoryObj<typeof Toolbar>

export const Default: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <Toolbar
        pivots={[
          { label: 'All', icon: <Star className="size-5" />, isActive: true },
          { label: 'Favorites', icon: <Heart className="size-5" /> },
          { label: 'Members', icon: <Users className="size-5" /> },
        ]}
      />
    </div>
  ),
}

export const WithSearch: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <Toolbar
        pivots={[
          { label: 'String', icon: <Heart className="size-5" /> },
          { label: 'String', icon: <Heart className="size-5" /> },
          { label: 'String', icon: <Heart className="size-5" /> },
        ]}
        searchPlaceholder="Search"
        showColumns
      />
    </div>
  ),
}

export const NoPivots: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <Toolbar searchPlaceholder="Search connections..." showColumns />
    </div>
  ),
}

export const NoColumns: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <Toolbar
        pivots={[
          { label: 'Active', icon: <Star className="size-5" />, isActive: true },
          { label: 'Archived', icon: <Heart className="size-5" /> },
        ]}
        showColumns={false}
      />
    </div>
  ),
}
