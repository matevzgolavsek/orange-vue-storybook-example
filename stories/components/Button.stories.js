import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
// import Task from './Task';
import OButton from '../../src/components/Button/Button';

const paddedList = () => {
  return {
    template: '<div class="p-3"><story/></div>',
  };
};

export default {
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  decorators: [paddedList, withKnobs]
};

export const actionsData = {
  handleClick: action('click'),
};


storiesOf('Components/Buttons', module)
  .addDecorator(withInfo)
  .addDecorator(paddedList)
  .addDecorator(withKnobs)

  .add(
    'Roles',
    () => ({
      components: { OButton },
      template: `<div>
        <o-button @click="handleClick" text="primary"></o-button>
        <o-button @click="handleClick" text="Secondary" role="secondary"></o-button>
        <o-button @click="handleClick" text="Basic" role="basic"></o-button>
      </div>`,
      methods: actionsData,
    }),
    {
      info: {
        summary: 'Roles button summary'
      }
    }
  )

  .add(
    'Sizes',
    () => ({
      components: { OButton },
      template: `<div>
        <o-button @click="handleClick" text="Small" size="small"></o-button>
        <o-button @click="handleClick" text="Regular"></o-button>
        <o-button @click="handleClick" text="Large" size="Large"></o-button>
      </div>`,
      methods: actionsData,
    }),
    {
      info: {
        summary: 'Sizes button summary'
      }
    }
  )





const buttonTemplate = `<o-button @click="handleClick" text="Default"></o-button>`;

// default state
export const Default = () => ({
  components: { OButton },
  template: buttonTemplate,
  methods: actionsData,
});

// roles state
export const Roles = () => ({
  components: { OButton },
  template: `<o-button @click="handleClick" text="Secondary" role="secondary"></o-button>`,
  methods: actionsData,
});

// sizes state
export const Sizes = () => ({
  components: { OButton },
  template: `<div><o-button @click="handleClick" text="Small" size="small"></o-button>
            <o-button @click="handleClick" text="Regular"></o-button>
            <o-button @click="handleClick" text="Large" size="Large"></o-button></div>`,
  methods: actionsData,
});

// wide state
export const Wide = () => ({
  components: { OButton },
  template: `<o-button @click="handleClick" text="Wide" :wide="true"></o-button>`,
  methods: actionsData,
});

// icon state
export const Icon = () => ({
  components: { OButton },
  template: `<div>
              <o-button @click="handleClick" icon="remove"></o-button>
              <o-button @click="handleClick" text="With icon" icon="arrow-right"></o-button></div>`,
  methods: actionsData,
});

// disabled button state
export const Disabled = () => ({
  components: { OButton },
  template: `<o-button @buttonClick="handleClick" text="Disabled" disabled></o-button>`,
  methods: actionsData,
});

// colors button state
export const Colors = () => ({
  components: { OButton },
  template: `<o-button @buttonClick="handleClick" text="Secondary color" color="secondary"></o-button>`,
  methods: actionsData,
});

export const Inverted = () => ({
  components: { OButton },
  template: `<div class="p-2 bg-primary"> <o-button @buttonClick="handleClick" text="Inverted" :inverted="true"></o-button></div>`,
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