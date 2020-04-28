import { action } from '@storybook/addon-actions';
import OButton from './Button';

export default {
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  handleClick: action('buttonClick'),
};

// default button state
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