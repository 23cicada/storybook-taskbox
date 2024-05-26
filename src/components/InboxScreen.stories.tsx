import InboxScreen from "./InboxScreen";
import store from '../lib/store'
import { rest } from 'msw'
import { MockedState } from './TaskList.stories'

import { Provider } from "react-redux";
import { Meta, StoryObj } from "@storybook/react";

import {
  fireEvent,
  waitFor,
  within,
  waitForElementToBeRemoved
} from '@storybook/test'

const meta = {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs']
} satisfies Meta<typeof InboxScreen>

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
          (_, res, ctx) => {
            return res(ctx.json(MockedState.tasks))
          }
        )
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'))
    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText('pinTask-1'))
      await fireEvent.click(canvas.getByLabelText('pinTask-3'))
    })
  }
};
export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
          (_, res, ctx) => {
            return res(ctx.status(403))
          }
        )
      ]
    }
  }
};
