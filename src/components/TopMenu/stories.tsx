import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { TopMenu } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/TopMenu',
  component: TopMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof TopMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TopMenu> = (props) => (
  <TopMenu {...props} />
)

export const Primary = Template.bind({})

Primary.args = {}
