import type { Preview } from '@storybook/react';
import { withScreenshot } from 'storycap';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    screenshot: {
      delay: 200,
    },
  },
  // @ts-expect-error - Storybook types are incorrect
  decorators: [withScreenshot],
};

export default preview;
