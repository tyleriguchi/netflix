import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Expando from './Expando'

class Card extends Component {
  state = {
    isHovered: false
  }

  handleEnter = (e) => {
    const { id, onMouseEnter } = this.props

    onMouseEnter(id)

    this.setState({
      isHovered: true
    })
  }

  handleLeave = (e) => {
    const { id, onMouseLeave } = this.props

    onMouseLeave(id)

    this.setState({
      isHovered: false
    })
  }

  _className() {
    const { isHovered } = this.state
    const { hoveredCardId, id } = this.props

    console.log('eh', isHovered)

    if (!isHovered) return 'slider-item'

    if (isHovered) {
      return 'slider-item hovered'
    }
    else if (hoveredCardId > id) {
      return 'slider-item shift-left'
    }
    else {
      return 'slider-item shift-right';
    }
    // return isHovered ? 'slider-item hovered' : 'slider-item'
  }

  render() {
    const { isHovered } = this.state

    return (
      <div
        className={this._className()}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <div>
          <div className='title-card'>
            <div className='title-card-image'>
            </div>
          </div>
          <Expando isHovered={isHovered} />
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  hoveredCardId: PropTypes.string,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
}

export default Card
