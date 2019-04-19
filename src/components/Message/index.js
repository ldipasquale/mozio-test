import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

class Message extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <div className="mozio__Message">
        {children}
      </div>
    )
  }
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Message
