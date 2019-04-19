import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

class Button extends React.PureComponent {
  static renderIcon(iconUrl, direction) {
    return (
      <div className={`mozio__Button__Icon mozio__Button__Icon--${direction}`}>
        <img
          className="mozio__Button__Icon__Image"
          src={`/public/${iconUrl}.png`}
          alt="Icon"
        />
      </div>
    )
  }

  render() {
    const { theme, children, onClick, leftIcon, rightIcon } = this.props

    return (
      <div
        className={cx({
          mozio__Button: true,
          [`mozio__Button--theme-${theme}`]: theme !== null,
        })}
        onClick={onClick}
      >
        {leftIcon && Button.renderIcon(leftIcon, 'left')}
        {children}
        {rightIcon && Button.renderIcon(rightIcon, 'right')}
      </div>
    )
  }
}

Button.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
}

Button.defaultProps = {
  theme: null,
  leftIcon: null,
  rightIcon: null,
}

export default Button
