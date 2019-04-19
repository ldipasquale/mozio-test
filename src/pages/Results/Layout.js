import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

import Header from 'components/Header'
import SearchBox from 'components/SearchBox'
import Button from 'components/Button'
import Message from 'components/Message'

import searchBoxFields from 'pages/fields'

import './styles.sass'

class Results extends React.PureComponent {
  render() {
    const { userValues, distance, onBackToHome, isFetching } = this.props

    return (
      <div className="mozio__Results">
        <Header />

        <SearchBox
          fields={searchBoxFields}
          className="mozio__Results__SearchBox"
          values={userValues}
        />

        {isFetching ? (
          <div className="mozio__Results__Spinner">
            <Loader
              type="Puff"
              color="#00BFFF"
              height="72"
              width="72"
            />
          </div>
        ) : (
          <React.Fragment>
            <div className="mozio__Results__Message">
              <Message>
                {`
                  Well done.
                  To go from ${userValues.from.formatted_address} to ${userValues.to.formatted_address},
                  you should move ${distance}km.
                `}
              </Message>
            </div>

            <div className="mozio__Results__SubmitArea">
              <Button
                onClick={onBackToHome}
                leftIcon="arrow-left"
                theme="gray"
              >
                Clear search
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

Results.propTypes = {
  userValues: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  distance: PropTypes.number.isRequired,
  onBackToHome: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default Results
