import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';
import { Meta, Story, Props } from '@storybook/addon-docs/blocks';

import OButton from '../../src/components/Button/Button';

const paddedList = () => {
  return {
    template: '<div><story/></div>',
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
  .addDecorator(paddedList)
  .addDecorator(withKnobs)
  .addParameters({ component: OButton })
  .add(
    'Tryout',
    () => ({
      components: { OButton },
      methods: actionsData,
      props: {
        type: {
          default: text('Type', 'button')
        },
        text: {
          default: text('Text', 'Hello Storybook')
        },
        role: {
          default: select('Role', 
            { 
              Primary: 'primary',
              Secondary: 'secondary',
              Basic: 'basic',
            }
          )
        },
        // Talk to Lucian about this prop - seems like samee as Role
        variant: {
          default: text('Variant', 'basic')
        },
        icon: {
          default: text('Icon', 'plus')
        },
        color: {
          default: text('Color', 'secondary')
        },
        size: {
          default: select('Size', 
            { 
              Small: 'small',
              Regular: 'regular',
              Large: 'large',
            }
          )
        },
        wide: {
          default: boolean('Wide', false)
        },
        // Need to check if still relevant
        back: {
          default: boolean('Back', false)
        },
        inverted: {
          default: boolean('Inverted', false)
        }
      },
      template: `<div :class="buttonExtraClass">
        <o-button @click="handleClick" :type="type" :text="text" :role="role" :icon="icon" :color="color" :size="size" :wide="wide" :back="back" :inverted="inverted"></o-button>
      </div>`,
      computed: {
        buttonExtraClass() {
          return {
            [`bg-${this.color}`]: this.inverted,
            [`p-3`]: this.inverted
          }
        }
      }
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
        <o-button @click="handleClick" text="Large" size="large"></o-button>
      </div>`,
      methods: actionsData,
    }),
    {
      info: {
        summary: 'Sizes button summary'
      }
    }
  )





// const buttonTemplate = `<o-button @click="handleClick" text="Default"></o-button>`;

// // default state
// export const Default = () => ({
//   components: { OButton },
//   template: buttonTemplate,
//   methods: actionsData,
// });

// // roles state
export const Roles = () => ({
  components: { OButton },
  template: `<o-button @click="handleClick" text="Secondary" role="secondary"></o-button>`,
  methods: actionsData,
});

// // sizes state
// export const Sizes = () => ({
//   components: { OButton },
//   template: `<div><o-button @click="handleClick" text="Small" size="small"></o-button>
//             <o-button @click="handleClick" text="Regular"></o-button>
//             <o-button @click="handleClick" text="Large" size="Large"></o-button></div>`,
//   methods: actionsData,
// });

// // wide state
// export const Wide = () => ({
//   components: { OButton },
//   template: `<o-button @click="handleClick" text="Wide" :wide="true"></o-button>`,
//   methods: actionsData,
// });

// // icon state
// export const Icon = () => ({
//   components: { OButton },
//   template: `<div>
//               <o-button @click="handleClick" icon="remove"></o-button>
//               <o-button @click="handleClick" text="With icon" icon="arrow-right"></o-button></div>`,
//   methods: actionsData,
// });

// // disabled button state
// export const Disabled = () => ({
//   components: { OButton },
//   template: `<o-button @buttonClick="handleClick" text="Disabled" disabled></o-button>`,
//   methods: actionsData,
// });

// // colors button state
// export const Colors = () => ({
//   components: { OButton },
//   template: `<o-button @buttonClick="handleClick" text="Secondary color" color="secondary"></o-button>`,
//   methods: actionsData,
// });

// export const Inverted = () => ({
//   components: { OButton },
//   template: `<div class="p-2 bg-primary"> <o-button @buttonClick="handleClick" text="Inverted" :inverted="true"></o-button></div>`,
//   methods: actionsData,
// });


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