import type { Meta, StoryObj } from '@storybook/react-vite'
import { TopBar } from '@/components/ui/top-bar'

const meta: Meta<typeof TopBar> = {
  title: 'UI/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta
type Story = StoryObj<typeof TopBar>

export const Default: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <TopBar />
    </div>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <TopBar
        title="Connections"
        avatarSrc="https://github.com/shadcn.png"
        avatarFallback="SC"
        isOnline
      />
    </div>
  ),
}

export const NewInterfaceOff: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <TopBar title="Remote Support" newInterfaceEnabled={false} />
    </div>
  ),
}

export const Offline: Story = {
  render: () => (
    <div className="bg-muted/30 p-4">
      <TopBar title="Module title" isOnline={false} />
    </div>
  ),
}
