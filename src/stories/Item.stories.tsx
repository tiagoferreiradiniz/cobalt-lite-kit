import type { Meta, StoryObj } from '@storybook/react-vite'
import { Item, ItemGroup, ItemContent, ItemTitle, ItemDescription, ItemMedia, ItemActions } from '@/components/ui/item'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const meta: Meta = { title: 'UI/Item', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <Item className="w-[350px]">
      <ItemMedia>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>shadcn</ItemTitle>
        <ItemDescription>UI component library</ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </ItemActions>
    </Item>
  ),
}

export const List: StoryObj = {
  render: () => (
    <ItemGroup className="w-[350px]">
      {['Alice Johnson', 'Bob Smith', 'Carol Williams'].map((name, i) => (
        <Item key={name}>
          <ItemMedia>
            <Avatar className="h-8 w-8">
              <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{name}</ItemTitle>
            <ItemDescription>Member since 202{i + 2}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">View</Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  ),
}
