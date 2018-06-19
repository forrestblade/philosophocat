import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../actions/action-creators'
import { PropTypes } from "prop-types";

class Favorites extends Component {
  render () {
    return (
      <ul className="list w-25-ns static pv2 br3 shadow-5 fr-ns mr2 ph2 mt0 measure center bg-light-red">
        {console.log(this.props.favorites)}
        <h3>Favorites</h3>
        {this.props.favorites.map((f, i) => {
          return (
            <li key={f.ID} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
              <img
                className="w2 h2 w3-ns h3-ns br-100"
                src="http://thecatapi.com/api/images/get?format=src&type=gif"
                alt=''
              />
              <div className="pl3 flex-auto">
                <span
                  dangerouslySetInnerHTML={{
                    __html: f.title
                  }}
                  className="f6 db black-70"
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: f.content
                  }}
                  className="f6 db black-70"
                />
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

Favorites.defaultProps = {
    addFavorite
  }

Favorites.propTypes = {
    addFavorite: PropTypes.func
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

export default connect(mapStateToProps)(Favorites)
