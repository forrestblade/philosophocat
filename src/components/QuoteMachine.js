import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  addFavorite,
  addQuotes,
  callPending,
  addRandom
} from '../actions/action-creators'
import Quotes from './Quotes'
import Favorites from './Favorites';

class QuoteMachine extends Component {
  componentDidMount () {
    this.props.callPending()
  }

  render () {
    return (
      <div>
        <h2 className="f-sub-headline">Random Meow</h2>
        {this.props.isPending === undefined ? (
          <article />
        ) : (
          <article className="mb2"
            dangerouslySetInnerHTML={{
              __html: this.props.random.content + this.props.random.title
            }}
          />
        )}
        <Favorites/>
        <Quotes />
      </div>
    )
  }
}

QuoteMachine.defaultProps = {
  callPending,
  addFavorite,
  addRandom
}

QuoteMachine.propTypes = {
  callPending: PropTypes.func,
  addFavorite: PropTypes.func
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    isPending: state.isPending,
    random: state.random
  }
}

export default connect(mapStateToProps, {
  addQuotes,
  callPending,
  addRandom
})(QuoteMachine)
