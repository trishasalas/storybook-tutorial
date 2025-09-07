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

