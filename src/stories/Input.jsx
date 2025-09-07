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

