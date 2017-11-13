import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
  state = {
    someonesHovered: false,
    hoveredCardId: '',
    // keep track of whos hovered
    // move the siblings over when someones hovered

  }
  data() {
    return {

    }
  }

  handleMouseEnter = (id) => {
    this.setState({
      someonesHovered: true,
      hoveredCardId: id,
    })
  }

  handleMouseLeave = () => {
    this.setState({
      someonesHovered: false,
      hoveredCardId: '',
    })
  }

  render() {
    const { someonesHovered, hoveredCardId } = this.state

    const cards = []
    for (let i = 0; i < 14; i++) {
      cards.push(
        <Card
          key={i}
          id={i.toString()} 
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          hoveredCardId={hoveredCardId}
        />
      )
    }
    return (
      <div className='slider'>
        {cards}
      </div>
    )
  }
}

export default CardList
