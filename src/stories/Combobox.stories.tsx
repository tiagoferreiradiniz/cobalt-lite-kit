import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import {
  Combobox, ComboboxContent, ComboboxInput, ComboboxItem,
  ComboboxList, ComboboxTrigger, ComboboxValue, ComboboxEmpty,
} from '@/components/ui/combobox'

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'svelte', label: 'SvelteKit' },
]

const meta: Meta = { title: 'UI/Combobox', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = React.useState('')
    return (
      <Combobox value={value} onValueChange={setValue as never}>
        <ComboboxTrigger className="w-[220px]">
          <ComboboxValue placeholder="Select framework…" />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxInput placeholder="Search frameworks…" />
          <ComboboxList>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            {frameworks.map((f) => (
              <ComboboxItem key={f.value} value={f.value}>{f.label}</ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )
  },
}
