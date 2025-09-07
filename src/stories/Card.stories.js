import { fn } from 'storybook/test';
import { Card } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled'],
    },
    elevation: {
      control: { type: 'select' },
      options: ['none', 'low', 'medium', 'high'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    title: 'Card Title',
    content: 'This is a sample card with some content to demonstrate the card component.',
  },
};

export const WithImage = {
  args: {
    title: 'Beautiful Landscape',
    content: 'A stunning view of mountains and valleys captured at sunset.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
  },
};

export const Outlined = {
  args: {
    title: 'Outlined Card',
    content: 'This card uses the outlined variant with a border.',
    variant: 'outlined',
  },
};

export const Filled = {
  args: {
    title: 'Filled Card',
    content: 'This card uses the filled variant with a background color.',
    variant: 'filled',
  },
};

export const HighElevation = {
  args: {
    title: 'High Elevation',
    content: 'This card has a high elevation shadow for emphasis.',
    elevation: 'high',
  },
};

export const Clickable = {
  args: {
    title: 'Clickable Card',
    content: 'Click this card to see the action in the Actions panel.',
    onClick: fn(),
  },
};

export const NoElevation = {
  args: {
    title: 'Flat Card',
    content: 'This card has no shadow or elevation.',
    elevation: 'none',
  },
};

