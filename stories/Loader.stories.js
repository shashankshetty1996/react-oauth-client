import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from '../src/component';

storiesOf('Loader', module).addWithJSX('Basic loader', () => <Loader />);
