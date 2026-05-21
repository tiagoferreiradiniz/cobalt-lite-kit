import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const tags = Array.from({ length: 50 }).map((_, i) => `tag-${i + 1}`)
const works = ['Aria', 'Beyond Good and Evil', 'Crime and Punishment', 'Don Quixote',
  'Emma', 'Faust', 'Great Expectations', 'Hamlet', 'Iliad', 'Jane Eyre',
  'King Lear', 'Les Misérables', 'Middlemarch', 'Nineteen Eighty-Four', 'Odyssey']

const meta: Meta = { title: 'UI/ScrollArea', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
      {tags.map((tag) => (
        <div key={tag}>
          <div className="text-sm">{tag}</div>
          <Separator className="my-2" />
        </div>
      ))}
    </ScrollArea>
  ),
}

export const Horizontal: StoryObj = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((work) => (
          <div key={work} className="w-[150px] shrink-0 rounded-md border p-4 text-sm">{work}</div>
        ))}
      </div>
    </ScrollArea>
  ),
}
