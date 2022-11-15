import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { DashboardCard } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/DashboardCard',
  component: DashboardCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof DashboardCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardCard> = (props) => <DashboardCard {...props} />

export const Primary = Template.bind({})

Primary.args = {}
