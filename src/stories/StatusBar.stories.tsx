import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertTriangle, ArrowUpCircle, Laptop, ShieldAlert } from 'lucide-react'
import { StatusBar } from '@/components/ui/status-bar'

const meta: Meta<typeof StatusBar> = {
  title: 'UI/StatusBar',
  component: StatusBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta
type Story = StoryObj<typeof StatusBar>

export const Default: Story = {
  render: () => <StatusBar />,
}

export const Offline: Story = {
  render: () => <StatusBar status="offline" statusText="Disconnected." />,
}

export const Connecting: Story = {
  render: () => (
    <StatusBar
      status="connecting"
      statusText="Connecting…"
      loading={{ percentage: 42, label: 'Establishing connection' }}
    />
  ),
}

export const WithEasyAccess: Story = {
  render: () => (
    <StatusBar
      items={[{ icon: <Laptop />, label: 'Easy Access not granted', onClick: () => {} }]}
    />
  ),
}

export const WithAlerts: Story = {
  render: () => (
    <StatusBar
      items={[
        { icon: <AlertTriangle />, label: 'Missing macOS permissions', onClick: () => {} },
        { icon: <ShieldAlert />, label: 'Improve device security', onClick: () => {} },
      ]}
    />
  ),
}

export const WithUpdate: Story = {
  render: () => (
    <StatusBar
      items={[{ icon: <ArrowUpCircle />, label: 'New version available', onClick: () => {} }]}
    />
  ),
}

export const AllItems: Story = {
  render: () => (
    <StatusBar
      loading={{ percentage: 100, label: 'Syncing' }}
      items={[
        { icon: <Laptop />, label: 'Easy Access not granted', onClick: () => {} },
        { icon: <AlertTriangle />, label: 'Missing macOS permissions', onClick: () => {} },
        { icon: <ShieldAlert />, label: 'Improve device security', onClick: () => {} },
        { icon: <ArrowUpCircle />, label: 'New version available', onClick: () => {} },
      ]}
    />
  ),
}
