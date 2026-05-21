import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  TypographyH1, TypographyH2, TypographyH3, TypographyH4,
  TypographyP, TypographyBlockquote, TypographyList,
  TypographyInlineCode, TypographyLead, TypographyLarge,
  TypographySmall, TypographyMuted,
} from '@/components/ui/typography'

const meta: Meta = {
  title: 'UI/Typography',
  tags: ['autodocs'],
}
export default meta

export const AllVariants: StoryObj = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <TypographyH1>The Quick Brown Fox</TypographyH1>
      <TypographyH2>Section Heading</TypographyH2>
      <TypographyH3>Subsection Heading</TypographyH3>
      <TypographyH4>Minor Heading</TypographyH4>
      <TypographyLead>A lead paragraph introduces a section with slightly larger, muted text.</TypographyLead>
      <TypographyP>
        Regular paragraph text. The quick brown fox jumps over the lazy dog. Use this for body copy across your application.
      </TypographyP>
      <TypographyBlockquote>
        "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs
      </TypographyBlockquote>
      <TypographyList>
        <li>First list item</li>
        <li>Second list item</li>
        <li>Third list item</li>
      </TypographyList>
      <TypographyP>
        Inline code example: <TypographyInlineCode>npm install cobalt-lite-kit</TypographyInlineCode>
      </TypographyP>
      <TypographyLarge>Large emphasized text</TypographyLarge>
      <TypographySmall>Small secondary text</TypographySmall>
      <TypographyMuted>Muted helper text for captions and hints</TypographyMuted>
    </div>
  ),
}

export const Headings: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <TypographyH1>Heading 1</TypographyH1>
      <TypographyH2>Heading 2</TypographyH2>
      <TypographyH3>Heading 3</TypographyH3>
      <TypographyH4>Heading 4</TypographyH4>
    </div>
  ),
}
