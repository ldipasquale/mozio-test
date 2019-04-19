import React from 'react'
import PropTypes from 'prop-types'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

import 'react-day-picker/lib/style.css'
import './styles.sass'

const Types = {
  TEXT: 'text',
  PLACE: 'place',
  DATE: 'date',
  NUMBER: 'number',
}

class Input extends React.PureComponent {
  static formatAddressToString(address) {
    return address.formatted_address
  }

  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleRawChange = this.handleRawChange.bind(this)
    this.handlePlaceChange = this.handlePlaceChange.bind(this)
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
    this.renderControl = this.renderControl.bind(this)
  }

  handleRawChange({ currentTarget }) {
    const { id, onChange } = this.props

    return onChange(id, currentTarget.value)
  }

  handleChange(value) {
    const { id, onChange } = this.props

    return onChange(id, value)
  }

  handlePlaceChange(searchValue) {
    return this.setState({ searchValue })
  }

  handlePlaceSelect(address) {
    return geocodeByAddress(address)
      .then(([result]) => {
        this.handleChange(result)
        this.handlePlaceChange(Input.formatAddressToString(result))
      })
  }

  renderControl() {
    const { id, type, value, placeholder, isDisabled } = this.props
    const { searchValue } = this.state

    if (isDisabled) {
      if (type === Types.DATE) {
        return (
          <DayPickerInput
            value={value}
            inputProps={{ disabled: true, readOnly: true }}
          />
        )
      }

      if (type === Types.PLACE) {
        return (
          <div>{Input.formatAddressToString(value)}</div>
        )
      }

      return (
        <div>{value}</div>
      )
    }

    switch (type) {
      case Types.TEXT:
      case '':
        return (
          <input
            id={id}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={this.handleRawChange}
          />
        )

      case Types.PLACE:
        return (
          <PlacesAutocomplete
            value={searchValue}
            onChange={this.handlePlaceChange}
            onSelect={this.handlePlaceSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input {...getInputProps({ placeholder })} />

                <div className="mozio__Input__Control__Options">
                  {loading && (
                    <div className="mozio__Input__Control__Options__Spinner">
                      Loading...
                    </div>
                  )}

                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? 'mozio__Input__Control__Options__Item mozio__Input__Control__Options__Item--active'
                      : 'mozio__Input__Control__Options__Item'

                    return (
                      <div {...getSuggestionItemProps(suggestion, { className })}>
                        <span>{suggestion.description}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        )

      case Types.DATE:
        return (
          <DayPickerInput
            onDayChange={this.handleChange}
            placeholder={placeholder}
          />
        )

      case Types.NUMBER:
        return (
          <input
            id={id}
            type="number"
            value={value}
            placeholder={placeholder}
            onChange={this.handleRawChange}
          />
        )

      default:
        return null
    }
  }

  render() {
    const { id, label } = this.props

    return (
      <div className="mozio__Input">
        <label
          className="mozio__Input__Label"
          htmlFor={id}
        >
          {label}
        </label>

        <div className="mozio__Input__Control">
          {this.renderControl()}
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([Types.TEXT, Types.DATE, Types.NUMBER, Types.PLACE]),
  isDisabled: PropTypes.bool,
}

Input.defaultProps = {
  onChange: null,
  value: '',
  placeholder: null,
  type: Types.TEXT,
  isDisabled: false,
}

export default Input
