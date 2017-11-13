import React, { Component } from 'react'
import PropTypes from 'prop-types'

import image from './title-card.jpg';

class ExpandoCard extends Component {
  render() {
    return (
      <div className='expando-image-container'>
        <img src={image} style={{width: '100%'}}/>
      </div>
    )
  }
}

ExpandoCard.propTypes = {}

export default ExpandoCard
