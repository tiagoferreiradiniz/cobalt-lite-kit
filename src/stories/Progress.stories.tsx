import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { Progress } from '@/components/ui/progress'

const meta: Meta<typeof Progress> = { title: 'UI/Progress', component: Progress, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = { args: { value: 60, className: 'w-[400px]' } }
export const Empty: Story = { args: { value: 0, className: 'w-[400px]' } }
export const Full: Story = { args: { value: 100, className: 'w-[400px]' } }

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0)
    React.useEffect(() => {
      const t = setTimeout(() => setProgress(75), 500)
      return () => clearTimeout(t)
    }, [])
    return <Progress value={progress} className="w-[400px] transition-all duration-700" />
  },
}
