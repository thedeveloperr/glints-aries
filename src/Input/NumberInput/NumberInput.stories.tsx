import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Props, NumberInput } from './NumberInput';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'Input/NumberInput',
  component: NumberInput,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<Props> = args => {
  const [number, setNumber] = useState('4');
  return (
    <NumberInput
      value={number}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setNumber(e.target.value)
      }
      {...args}
    />
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Number',
};

export const minimumValue3AndMaximumValue10 = Template.bind({});
minimumValue3AndMaximumValue10.args = {
  label: 'Number',
  min: 3,
  max: 10,
};

export const stepValue2 = Template.bind({});
stepValue2.args = {
  label: 'Number',
  step: 2,
};
