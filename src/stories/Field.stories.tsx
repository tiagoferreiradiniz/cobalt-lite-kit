import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, FieldLabel, FieldTitle, FieldDescription, FieldError, FieldContent, FieldSet, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

const meta: Meta = { title: 'UI/Field', tags: ['autodocs'] }
export default meta

export const Default: StoryObj = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <Field>
        <FieldLabel htmlFor="f-email">
          <FieldTitle>Email address</FieldTitle>
          <FieldDescription>We'll never share your email.</FieldDescription>
        </FieldLabel>
        <FieldContent>
          <Input id="f-email" type="email" placeholder="m@example.com" />
        </FieldContent>
      </Field>
    </div>
  ),
}

export const WithError: StoryObj = {
  render: () => (
    <div className="w-[350px]">
      <Field>
        <FieldLabel htmlFor="f-username">
          <FieldTitle>Username</FieldTitle>
        </FieldLabel>
        <FieldContent>
          <Input id="f-username" defaultValue="invalid user!" className="border-destructive" />
        </FieldContent>
        <FieldError>Username can only contain letters, numbers, and underscores.</FieldError>
      </Field>
    </div>
  ),
}

export const FieldSetExample: StoryObj = {
  render: () => (
    <FieldSet className="w-[350px]">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="f-notif">
            <FieldTitle>Email notifications</FieldTitle>
            <FieldDescription>Receive updates via email.</FieldDescription>
          </FieldLabel>
          <FieldContent>
            <Switch id="f-notif" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}
