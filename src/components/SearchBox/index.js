import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Input from 'components/Input'

import './styles.sass'

class SearchBox extends React.PureComponent {
  constructor(props) {
    super(props)

    this.renderInput = this.renderInput.bind(this)
  }

  renderInput({ id, label, placeholder, type, widthMultiplier }) {
    const { onChange, values } = this.props

    return (
      <div
        key={id}
        className="mozio__SearchBox__Input"
        {...widthMultiplier && {
          style: {
            flexGrow: widthMultiplier,
          },
        }}
      >
        <Input
          id={id}
          label={label}
          placeholder={placeholder}
          value={values[id]}
          type={type}
          {...onChange !== null ? { onChange } : {
            isDisabled: true,
          }}
        />
      </div>
    )
  }

  render() {
    const { fields, className } = this.props

    return (
      <div className={cx({
        mozio__SearchBox: true,
        [className]: className !== null,
      })}
      >
        {fields.map(this.renderInput)}
      </div>
    )
  }
}

SearchBox.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: Input.propTypes.type,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })).isRequired,
  values: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
  onChange: PropTypes.func,
}

SearchBox.defaultProps = {
  values: {},
  className: null,
  onChange: null,
}

export default SearchBox
