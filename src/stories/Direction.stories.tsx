import type { Meta, StoryObj } from '@storybook/react-vite'
import { DirectionProvider } from '@/components/ui/direction'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const meta: Meta = { title: 'UI/Direction', tags: ['autodocs'] }
export default meta

export const LTR: StoryObj = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div className="flex gap-2 w-[300px]">
        <Input placeholder="Left-to-right input" />
        <Button variant="outline">Send</Button>
      </div>
    </DirectionProvider>
  ),
}

export const RTL: StoryObj = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div className="flex gap-2 w-[300px]" dir="rtl">
        <Input placeholder="مدخل من اليمين إلى اليسار" />
        <Button variant="outline">إرسال</Button>
      </div>
    </DirectionProvider>
  ),
}
