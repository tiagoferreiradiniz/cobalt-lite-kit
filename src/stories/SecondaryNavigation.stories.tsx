import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Bell,
  Building,
  Building2,
  CreditCard,
  Key,
  Laptop,
  Lock,
  Monitor,
  Plug,
  Puzzle,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  FileText,
  Settings2,
} from 'lucide-react'
import { SecondaryNavigation } from '@/components/ui/secondary-navigation'
import type { SecondaryNavSection } from '@/components/ui/secondary-navigation'

const meta: Meta<typeof SecondaryNavigation> = {
  title: 'UI/SecondaryNavigation',
  component: SecondaryNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta
type Story = StoryObj<typeof SecondaryNavigation>

const defaultSections: SecondaryNavSection[] = [
  {
    id: 'company',
    title: 'Company',
    items: [
      { id: 'company-readiness', label: 'Company Readiness', icon: <Building2 /> },
      { id: 'general', label: 'General', icon: <Settings /> },
      { id: 'organization', label: 'Organization', icon: <Building /> },
      { id: 'license-usage', label: 'License Usage', icon: <CreditCard /> },
      { id: 'integrations', label: 'Integrations', icon: <Plug /> },
      { id: 'teamviewer-ai', label: 'TeamViewer AI', icon: <Sparkles /> },
    ],
  },
  {
    id: 'users',
    title: 'Users',
    items: [
      { id: 'users', label: 'Users', icon: <Users /> },
      { id: 'user-groups', label: 'User Groups', icon: <Users /> },
      { id: 'roles', label: 'Roles', icon: <Shield /> },
    ],
  },
  {
    id: 'devices',
    title: 'Devices',
    items: [
      { id: 'devices', label: 'Devices', icon: <Monitor /> },
      { id: 'policies', label: 'Policies', icon: <FileText /> },
      { id: 'rollout-configuration', label: 'Rollout Configuration', icon: <Settings2 /> },
      { id: 'alert-rules', label: 'Alert rules', icon: <Bell /> },
      { id: 'agentless-access', label: 'Agentless Access', icon: <Laptop /> },
      { id: 'endpoint-protection', label: 'Endpoint Protection', icon: <Shield /> },
    ],
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance',
    items: [
      { id: 'security-center', label: 'Security Center', icon: <ShieldCheck /> },
      { id: 'event-log', label: 'Event Log', icon: <FileText /> },
      { id: 'single-sign-on', label: 'Single sign-on', icon: <Key /> },
      { id: 'trusted-devices', label: 'Trusted devices', icon: <Laptop /> },
    ],
  },
  {
    id: 'remote-control',
    title: 'Remote Control',
    items: [
      { id: 'conditional-access', label: 'Conditional Access', icon: <Lock /> },
      { id: 'custom-modules', label: 'Custom Modules', icon: <Puzzle /> },
    ],
  },
]

export const Default: Story = {
  render: () => {
    const [activeId, setActiveId] = React.useState<string | undefined>(undefined)
    return (
      <div className="flex h-screen items-start bg-muted/30 p-4">
        <SecondaryNavigation
          sections={defaultSections}
          activeItemId={activeId}
          onItemClick={setActiveId}
        />
      </div>
    )
  },
}

export const WithActiveItem: Story = {
  render: () => {
    const [activeId, setActiveId] = React.useState('general')
    return (
      <div className="flex h-screen items-start bg-muted/30 p-4">
        <SecondaryNavigation
          sections={defaultSections}
          activeItemId={activeId}
          onItemClick={setActiveId}
        />
      </div>
    )
  },
}

export const WithCollapsedSections: Story = {
  render: () => {
    const [activeId, setActiveId] = React.useState('general')
    const sectionsWithCollapsed: SecondaryNavSection[] = defaultSections.map((s, i) =>
      i > 0 ? { ...s, defaultCollapsed: true } : s
    )
    return (
      <div className="flex h-screen items-start bg-muted/30 p-4">
        <SecondaryNavigation
          sections={sectionsWithCollapsed}
          activeItemId={activeId}
          onItemClick={setActiveId}
        />
      </div>
    )
  },
}

export const WithoutIcons: Story = {
  render: () => {
    const [activeId, setActiveId] = React.useState('general')
    const sectionsNoIcons: SecondaryNavSection[] = defaultSections.map((s) => ({
      ...s,
      items: s.items.map(({ icon: _icon, ...item }) => item),
    }))
    return (
      <div className="flex h-screen items-start bg-muted/30 p-4">
        <SecondaryNavigation sections={sectionsNoIcons} activeItemId={activeId} onItemClick={setActiveId} />
      </div>
    )
  },
}

export const Interactive: Story = {
  render: () => {
    const [activeId, setActiveId] = React.useState('general')
    return (
      <div className="flex h-screen items-start bg-muted/30 p-4">
        <SecondaryNavigation
          sections={defaultSections}
          activeItemId={activeId}
          onItemClick={setActiveId}
        />
      </div>
    )
  },
}
