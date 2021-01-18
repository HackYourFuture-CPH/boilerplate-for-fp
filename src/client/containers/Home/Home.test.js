import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import { Home } from './Home';

test('Home section has correct classname', () => {
  const title = 'home';

  expect(render(<Home />).container.firstChild).toHaveClass(title);
});
