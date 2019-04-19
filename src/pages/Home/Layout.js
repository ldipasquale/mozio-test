import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import SearchBox from 'components/SearchBox'
import Button from 'components/Button'

import searchBoxFields from 'pages/fields'

import './styles.sass'

class Home extends React.PureComponent {
  static areUserValuesValid({ from, to, date, passengers }) {
    if (from && to && date && passengers) {
      return true
    }

    return false
  }

  constructor(props) {
    super(props)

    this.state = {
      userValues: searchBoxFields.reduce((accumulator, field) => ({
        ...accumulator,
        [field.id]: field.defaultValue,
      }), {}),
    }

    this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this)
    this.handleCalculateDistance = this.handleCalculateDistance.bind(this)
  }

  handleSearchBoxChange(id, value) {
    const { userValues } = this.state

    return this.setState({
      userValues: {
        ...userValues,
        [id]: value,
      },
    })
  }

  handleCalculateDistance() {
    const { onCalculateDistance } = this.props
    const { userValues } = this.state

    if (Home.areUserValuesValid(userValues)) {
      return onCalculateDistance(userValues)
    }

    return false
  }

  render() {
    const { userValues } = this.state

    return (
      <div className="mozio__Home">
        <div className="mozio__Home__Header">
          <Header />
        </div>

        <div className="mozio__Home__SearchArea">
          <SearchBox
            fields={searchBoxFields}
            className="mozio__Home__SearchArea__Box"
            onChange={this.handleSearchBoxChange}
            values={userValues}
          />
        </div>

        <div className="mozio__Home__SubmitArea">
          <div className="mozio__Home__SubmitArea__Button">
            <Button
              onClick={this.handleCalculateDistance}
              rightIcon="arrow-right"
            >
              Calculate distance
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  onCalculateDistance: PropTypes.func.isRequired,
}

export default Home
