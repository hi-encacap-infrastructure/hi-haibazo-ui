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
      viewports: {
        desktop: '1920x1080',
        mobile: '375x667',
      },
    },
  },
  // @ts-expect-error - Storybook types are incorrect
  decorators: [withScreenshot],
};

export default preview;
