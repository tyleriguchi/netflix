import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ExpandoCard from './ExpandoCard'

class Expando extends Component {
  render() {
    const { isHovered } = this.props

    if (!isHovered) return <span />

    return (
      <span >
        <div className='expando expando-transition'>
          <ExpandoCard />
        </div>
      </span>
    )
  }
}

Expando.propTypes = {
  isHovered: PropTypes.bool.isRequired
}

export default Expando
