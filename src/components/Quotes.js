import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  addFavorite
} from '../actions/action-creators'

class Quotes extends Component {
  componentDidUpdate () {
    // console.log(this.props)
    console.log(this.props)
  }

  render () {
    return (
      <section className="w-75-ns flex flex-wrap">
        {this.props.isPending === undefined ? (
          <article />
        ) : (
          this.props.quotes.map((q, i) => {
            return (
              <article key={q.ID} className="mw5-ns shadow-4 center bg-white br3 pa3 pa4-ns mb3 ba b--black-10">
                <div className="tc">
                  <img
                    src="https://cataas.com/cat/gif"
                    className="br-100 h3 w3 dib"
                    title="Photo of a kitty staring at you"
                    alt=''
                  />
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: q.title
                    }}
                    className="f4"
                  />
                  <hr className="mw3 bb bw1 b--black-10" />
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: q.content
                  }}
                  className="lh-copy measure center f6 black-70"
                />
                <button onClick={() => {this.props.addFavorite(q)}} className="f6 bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Favorite</button>
              </article>
            )
          })
        )}
      </section>
    )
  }
}

Quotes.propTypes = {
  quotes: PropTypes.array
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    isPending: state.isPending
  }
}

export default connect(mapStateToProps, {addFavorite})(Quotes)
