import { fn } from 'storybook/test';
import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
  },
  // Use `fn` to spy on the onChange arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    placeholder: 'Enter text here...',
  },
};

export const WithLabel = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
};

export const Email = {
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
  },
};

export const Password = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const WithHelperText = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Username must be at least 3 characters long',
  },
};

export const Error = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: true,
    helperText: 'Please enter a valid email address',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    value: 'This field is disabled',
    disabled: true,
  },
};

export const Filled = {
  args: {
    label: 'Filled Variant',
    placeholder: 'Type something...',
    variant: 'filled',
  },
};

export const Standard = {
  args: {
    label: 'Standard Variant',
    placeholder: 'Type something...',
    variant: 'standard',
  },
};

export const Large = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size input',
    size: 'large',
  },
};

export const Small = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size input',
    size: 'small',
  },
};

