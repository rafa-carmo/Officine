import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { MinimalCard } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/MinimalCard',
  component: MinimalCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MinimalCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MinimalCard> = (props) => <MinimalCard {...props} />

export const Primary = Template.bind({})

Primary.args = {}
