import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Expando extends Component {
  render() {
    const { isHovered } = this.props
    
    if (!isHovered) return <span />
    
    return (
      <span >
        <div className='expando'>some content</div>
      </span>
    )
  }
}

Expando.propTypes = {
  isHovered: PropTypes.bool.isRequired
}

export default Expando