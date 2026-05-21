import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'

const meta: Meta = { title: 'UI/Calendar', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate as never}
        className="rounded-md border"
      />
    )
  },
}

export const Range: StoryObj = {
  render: () => (
    <Calendar
      mode="range"
      numberOfMonths={2}
      className="rounded-md border"
    />
  ),
}
