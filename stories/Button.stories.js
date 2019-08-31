import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/component';

import '../src/component/Button/Button.scss';

const mockFn = (...rest) => console.log(rest);

storiesOf('Button', module).addWithJSX('Primary Button', () => (
  <Button onClick={mockFn}>Sign In with Matic</Button>
));
