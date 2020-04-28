import { action } from '@storybook/addon-actions';
// import Task from './Task';
import OButton from '../../src/components/Button/Button';

export default {
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
  handleClick: action('buttonClick'),
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0),
};

export const buttonData = {
  isDisabled: true
};

const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`;
const buttonTemplate = `<o-button @buttonClick="handleClick">Text</o-button>`;

// default task state
export const Default = () => ({
  components: { OButton },
  template: buttonTemplate,
  methods: actionsData,
});

// disabled button state
export const Disabled = () => ({
  components: { OButton },
  template: `<o-button @buttonClick="handleClick" :isDisabled="true">Disabled</o-button>`,
  methods: actionsData,
});

// pinned task state
// export const Pinned = () => ({
//   components: { Task },
//   template: taskTemplate,
//   props: {
//     task: {
//       default: () => ({
//         ...taskData,
//         state: 'TASK_PINNED',
//       }),
//     },
//   },
//   methods: actionsData,
// });
// // archived task state
// export const Archived = () => ({
//   components: { Task },
//   template: taskTemplate,
//   props: {
//     task: {
//       default: () => ({
//         ...taskData,
//         state: 'TASK_ARCHIVED',
//       }),
//     },
//   },
//   methods: actionsData,
// });