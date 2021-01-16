import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import SampleComponent from './SampleComponent';

export default {
  title: 'Components / Sample Component',
  component: SampleComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <SampleComponent
    title={text('Title', 'Test title')}
    onClick={action('You have clicked the button')}
  />
);
