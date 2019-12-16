import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js';



const SushiContainer = (props) => {

  function renderSushiComponents(i){
    
    return props.sushis.slice(i, i+4).map(sushi => <Sushi key={sushi.id} {...sushi} eaten={props.eaten} handleEatenClick={props.handleEatenClick} sushiIds={props.sushiIds} />)
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushiComponents(props.conveyer)}
        <MoreButton handleMoreButtonClick={props.handleMoreButtonClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer