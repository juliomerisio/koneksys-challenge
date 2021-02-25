import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Icon from './Icon'
import { IconProps } from './types'

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Example = Template.bind({})
Example.args = {
  icon: 'FaCheck',
  color: 'red',
}
