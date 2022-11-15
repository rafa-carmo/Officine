import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Notifications } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Notifications',
  component: Notifications,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Notifications>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Notifications> = (props) => <Notifications {...props} />

export const Primary = Template.bind({})

Primary.args = {}
