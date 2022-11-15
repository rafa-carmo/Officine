import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { DashboardTableBudget } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/DashboardTableBudget',
  component: DashboardTableBudget,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof DashboardTableBudget>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardTableBudget> = (props) => <DashboardTableBudget {...props} />

export const Primary = Template.bind({})

Primary.args = {}
