import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Group = ResizablePanelGroup as any

const meta: Meta = { title: 'UI/Resizable', tags: ['autodocs'] }
export default meta

export const Horizontal: StoryObj = {
  render: () => (
    <Group direction="horizontal" className="min-h-[200px] w-[500px] rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6 text-sm">Panel One</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6 text-sm">Panel Two</div>
      </ResizablePanel>
    </Group>
  ),
}

export const Vertical: StoryObj = {
  render: () => (
    <Group direction="vertical" className="min-h-[300px] w-[300px] rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6 text-sm">Top</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6 text-sm">Bottom</div>
      </ResizablePanel>
    </Group>
  ),
}

export const ThreePanels: StoryObj = {
  render: () => (
    <Group direction="horizontal" className="min-h-[200px] w-[600px] rounded-lg border">
      <ResizablePanel defaultSize={25}><div className="flex h-full items-center justify-center p-4 text-sm">Sidebar</div></ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-4 text-sm">Main</div></ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25}><div className="flex h-full items-center justify-center p-4 text-sm">Details</div></ResizablePanel>
    </Group>
  ),
}
