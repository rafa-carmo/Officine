import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { LateralMenu } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/LateralMenu',
  component: LateralMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LateralMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LateralMenu> = (props) => <LateralMenu {...props} />

export const Primary = Template.bind({})

Primary.args = {}
