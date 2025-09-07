


# A Comprehensive Guide to Storybook with React, JSX, and npm

Welcome to this in-depth tutorial on Storybook, a powerful tool for developing UI components in isolation. This guide will walk you through the process of setting up Storybook in a React project, creating components using JSX, and writing stories to showcase and test your components. We will be using the latest version of Storybook (v9.1.5) and npm as our package manager.

## What is Storybook?

Storybook is an open-source tool that provides an isolated environment for building, testing, and documenting UI components. It allows you to develop components in a focused way, without being tied to the business logic and context of your main application. This isolation makes it easier to build reusable, robust, and well-documented components.

### Key Benefits of Using Storybook:

*   **Isolation:** Develop components in a sandboxed environment, free from application-specific dependencies and concerns.
*   **Component-Driven Development:** Focus on building one component at a time, leading to a more modular and maintainable codebase.
*   **Visual Testing:** Easily test your components in various states and with different props, ensuring they look and behave as expected.
*   **Collaboration:** Share your component library with designers, product managers, and other developers, facilitating better communication and feedback.
*   **Documentation:** Storybook automatically generates a living style guide for your components, making it easy for everyone to understand how they work.

By the end of this tutorial, you will have a solid understanding of how to leverage Storybook to streamline your UI development workflow and build a beautiful, functional component library.




## Getting Started: Setting Up Your Project

Before we can start building components, we need to set up a new React project and install Storybook. We'll use `create-react-app` to bootstrap our project and `npm` to manage our dependencies.

### 1. Create a New React Project

First, let's create a new React project using the `manus-create-react-app` utility. This will set up a basic React application with a modern build setup.

```bash
manus-create-react-app storybook-tutorial
```

This command will create a new directory called `storybook-tutorial` with a pre-configured React project. The project will use Vite as the build tool and will be set up with JSX support.

### 2. Install Storybook

Now that we have our React project, let's install Storybook. Navigate to the project directory and run the following command:

```bash
cd storybook-tutorial
npm create storybook@latest
```

This command will do the following:

*   Install all the necessary Storybook dependencies.
*   Create a `.storybook` directory with default configuration files.
*   Add the required scripts to your `package.json` file to run and build Storybook.
*   Generate some example stories to get you started.

During the installation, you will be prompted to confirm the installation and choose whether to use the onboarding experience. For this tutorial, we selected "Yes" for the onboarding to get a better understanding of the setup process.

Once the installation is complete, Storybook will automatically start the development server and open it in your browser. You should see the Storybook UI with the example components.




## Creating Your First Components

Now that we have our project set up, let's create some custom components. We'll start with a simple `Card` component and then create an `Input` component to demonstrate different UI elements.

### 1. The Card Component

The `Card` component will be a flexible container for displaying content, such as a title, text, and an optional image. This is a common component in many web applications.

First, create a new file called `Card.jsx` in the `src/stories` directory and add the following code:

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

/** A flexible card component for displaying content */
export const Card = ({
  title,
  content,
  imageUrl = null,
  variant = 'default',
  elevation = 'medium',
  onClick = null,
  ...props
}) => {
  const cardClasses = [
    'storybook-card',
    `storybook-card--${variant}`,
    `storybook-card--${elevation}`,
    onClick ? 'storybook-card--clickable' : ''
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {imageUrl && (
        <div className="storybook-card__image">
          <img src={imageUrl} alt={title || 'Card image'} />
        </div>
      )}
      <div className="storybook-card__content">
        {title && <h3 className="storybook-card__title">{title}</h3>}
        {content && <p className="storybook-card__text">{content}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  /** Card title */
  title: PropTypes.string,
  /** Card content text */
  content: PropTypes.string,
  /** Optional image URL */
  imageUrl: PropTypes.string,
  /** Card variant style */
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  /** Card elevation/shadow */
  elevation: PropTypes.oneOf(['none', 'low', 'medium', 'high']),
  /** Optional click handler */
  onClick: PropTypes.func,
};
```

Next, create a corresponding CSS file called `card.css` in the same directory to style the component:

```css
.storybook-card {
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  max-width: 300px;
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
}

.storybook-card--clickable {
  cursor: pointer;
}

.storybook-card--clickable:hover {
  transform: translateY(-2px);
}

/* Variants */
.storybook-card--default {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
}

.storybook-card--outlined {
  background-color: transparent;
  border: 2px solid #1976d2;
}

.storybook-card--filled {
  background-color: #f5f5f5;
  border: none;
}

/* Elevation */
.storybook-card--none {
  box-shadow: none;
}

.storybook-card--low {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.storybook-card--medium {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.storybook-card--high {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.storybook-card__image {
  margin: -16px -16px 16px -16px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.storybook-card__image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.storybook-card__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.storybook-card__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  line-height: 1.3;
}

.storybook-card__text {
  margin: 0;
  font-size: 14px;
  color: #666666;
  line-height: 1.5;
}
```

### 2. The Input Component

Next, let's create an `Input` component for forms. This component will support different types, sizes, and variants.

Create a new file called `Input.jsx` in the `src/stories` directory with the following code:

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/** A flexible input component for forms */
export const Input = ({
  type = 'text',
  placeholder = '',
  label = null,
  value = '',
  size = 'medium',
  variant = 'outlined',
  disabled = false,
  error = false,
  helperText = null,
  onChange = null,
  ...props
}) => {
  const inputClasses = [
    'storybook-input',
    `storybook-input--${size}`,
    `storybook-input--${variant}`,
    error ? 'storybook-input--error' : '',
    disabled ? 'storybook-input--disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className="storybook-input-wrapper">
      {label && (
        <label className="storybook-input__label">
          {label}
        </label>
      )}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      {helperText && (
        <div className={`storybook-input__helper ${error ? 'storybook-input__helper--error' : ''}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  /** Input type */
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url']),
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Input label */
  label: PropTypes.string,
  /** Input value */
  value: PropTypes.string,
  /** Input size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Input variant */
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Error state */
  error: PropTypes.bool,
  /** Helper text */
  helperText: PropTypes.string,
  /** Change handler */
  onChange: PropTypes.func,
};
```

And here is the corresponding CSS in `input.css`:

```css
.storybook-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 300px;
}

.storybook-input__label {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 4px;
}

.storybook-input {
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  outline: none;
}

/* Sizes */
.storybook-input--small {
  padding: 8px 12px;
  font-size: 12px;
}

.storybook-input--medium {
  padding: 12px 16px;
  font-size: 14px;
}

.storybook-input--large {
  padding: 16px 20px;
  font-size: 16px;
}

/* Variants */
.storybook-input--outlined {
  border: 1px solid #d0d0d0;
  background-color: #ffffff;
}

.storybook-input--outlined:focus {
  border-color: #1976d2;
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
}

.storybook-input--filled {
  border: none;
  background-color: #f5f5f5;
  border-bottom: 2px solid #d0d0d0;
  border-radius: 4px 4px 0 0;
}

.storybook-input--filled:focus {
  border-bottom-color: #1976d2;
  background-color: #f0f0f0;
}

.storybook-input--standard {
  border: none;
  border-bottom: 1px solid #d0d0d0;
  border-radius: 0;
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
}

.storybook-input--standard:focus {
  border-bottom-color: #1976d2;
  border-bottom-width: 2px;
}

/* States */
.storybook-input--error {
  border-color: #d32f2f !important;
}

.storybook-input--error:focus {
  border-color: #d32f2f !important;
  box-shadow: 0 0 0 2px rgba(211, 47, 47, 0.2) !important;
}

.storybook-input--disabled {
  background-color: #f5f5f5;
  color: #999999;
  cursor: not-allowed;
  border-color: #e0e0e0;
}

.storybook-input__helper {
  font-size: 12px;
  color: #666666;
  margin-top: 4px;
}

.storybook-input__helper--error {
  color: #d32f2f;
}
```




## Writing Stories for Your Components

Now that we have our components, we need to write stories for them. Stories are a declarative way to represent the different states of your components. They are written in JavaScript files with the `.stories.js` extension.

### 1. Stories for the Card Component

Let's create a story file for our `Card` component. Create a new file called `Card.stories.js` in the `src/stories` directory and add the following code:

```javascript
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
```

### 2. Stories for the Input Component

Next, let's create the stories for our `Input` component. Create a new file called `Input.stories.js` in the `src/stories` directory with the following code:

```javascript
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
```

With these story files in place, Storybook will automatically pick them up and display your components in the UI. You can now interact with your components, change their props using the controls, and see the results in real-time.




## Conclusion

In this tutorial, we have covered the entire process of setting up Storybook in a React project, creating custom components with JSX, and writing stories to document and test them. You now have a solid foundation for building and maintaining a robust component library with Storybook.

We encourage you to explore more of Storybook's features, such as addons, decorators, and advanced configuration options. The official Storybook documentation is an excellent resource for further learning.

Happy coding!


