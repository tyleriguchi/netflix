import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
  state = {
    someonesHovered: false
  }
  data() {
    return {
      
    }
  }
  
  handleMouseEnter = () => {
    this.setState({
      someonesHovered: true
    })
  }
  
  handleMouseLeave = () => {
    this.setState({
      someonesHovered: false
    })
  }

  render() {
    const { someonesHovered } = this.state
    
    const cards = []
    for (let i = 0; i < 14; i++) {
      cards.push(
        <Card key={i} id={i} 
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          childHovered={someonesHovered} 
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