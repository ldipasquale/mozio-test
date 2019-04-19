import React from 'react'

import './styles.sass'

class Header extends React.PureComponent {
  render() {
    return (
      <div className="mozio__Header">
        <img
          className="mozio__Header__Logo"
          src="/public/logo.png"
          alt="Logo"
        />
      </div>
    )
  }
}

export default Header
