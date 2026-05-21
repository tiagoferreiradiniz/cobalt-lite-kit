import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import type { DateRange } from 'react-day-picker'
import { DatePicker, DateRangePicker } from '@/components/ui/date-picker'

const meta: Meta = {
  title: 'UI/DatePicker',
  tags: ['autodocs'],
}
export default meta

export const Single: StoryObj = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>()
    return <DatePicker value={date} onChange={setDate} />
  },
}

export const Range: StoryObj = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>()
    return <DateRangePicker value={range} onChange={setRange} />
  },
}
