import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  state = {
    hovering: false
  }
  
  handleEnter = (e) => {
    const { id, onMouseEnter } = this.props
    
    onMouseEnter()
  }
  
  handleLeave = (e) => {
    const { id, onMouseLeave } = this.props
    
    onMouseLeave()
  }
  
  _className() {
    const { hovering } = this.state
    console.log('eh', hovering)
    return hovering ? 'slider-item hovered' : 'slider-item'
  }
  
  render() {    
    return (
      <div
        className={this._className()}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <div className='title-card'>
          <img className='title-card-image' src='341x192.png' />
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  // id: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
}

export default Card