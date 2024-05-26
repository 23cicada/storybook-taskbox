import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import Task from './Task';

// 自定义 args
type TemporaryArgs = {
  id?: string
  title: string
  state: string
}
type CustomArgs = React.ComponentProps<typeof Task> & TemporaryArgs

// Component Story Format (CSF)
const meta = {
  component: Task,
  title: 'Task',
  // 生成文档页面
  tags: ['autodocs'],
  argTypes: {
    id: {
      name: 'task.id',
      table: { 
        type: { summary: 'string' },
        category: 'Task',
      } 
    },
    title: {
      name: 'task.title',
      table: { 
        type: { summary: 'string' },
        category: 'Task',
      } 
    },
    state: {
      name: 'task.state',
      table: { 
        type: { summary: 'string' },
        category: 'Task',
      } 
    }
  }
} satisfies Meta<CustomArgs>;
export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};