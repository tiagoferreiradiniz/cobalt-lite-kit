import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    layout: 'fullscreen',
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === 'dark'
      return (
        <div className={`${isDark ? 'dark' : ''} bg-background text-foreground font-sans min-h-screen`} style={{ padding: '2rem' }}>
          <Story />
        </div>
      )
    },
  ],
}

export default preview
