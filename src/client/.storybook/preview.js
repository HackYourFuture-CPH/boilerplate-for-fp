import '!style-loader!css-loader!../index.css';
import { withKnobs } from '@storybook/addon-knobs';

import React from 'react';
import { FirebaseProvider } from '../firebase';

export const decorators = [
  withKnobs,
  (Story) => (
    <FirebaseProvider initialAuth={{ inStorybook: true }}>
      <Story />
    </FirebaseProvider>
  ),
];
