import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const meta: Meta = { title: 'UI/AspectRatio', tags: ['autodocs'] }
export default meta

export const SixteenByNine: StoryObj = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800"
          alt="Photo"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: StoryObj = {
  render: () => (
    <div className="w-[200px]">
      <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400"
          alt="Photo"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
}
