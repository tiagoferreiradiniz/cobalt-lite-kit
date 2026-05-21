import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const meta: Meta = { title: 'UI/Sonner', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <div>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast('Event has been created.')}>Default</Button>
        <Button variant="outline" onClick={() => toast.success('Profile updated successfully!')}>Success</Button>
        <Button variant="outline" onClick={() => toast.error('Something went wrong.')}>Error</Button>
        <Button variant="outline" onClick={() => toast.warning('Low disk space.')}>Warning</Button>
        <Button variant="outline" onClick={() => toast.info('New version available.')}>Info</Button>
        <Button variant="outline" onClick={() => toast.loading('Uploading file…')}>Loading</Button>
        <Button
          variant="outline"
          onClick={() =>
            toast('File uploaded', {
              description: 'Monday, January 3rd at 6:00pm',
              action: { label: 'Undo', onClick: () => console.log('Undo') },
            })
          }
        >
          With action
        </Button>
      </div>
    </div>
  ),
}
