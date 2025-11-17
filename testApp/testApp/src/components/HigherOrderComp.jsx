import React from 'react'
import ChildComponent from './ChildComponent'
import Btn from './Btn'

function HigherOrderComp() {
  return (
    <div>
        first component
      {/* <ChildComponent/> */}
      <Btn color={'red'} width={50} height={50} text={'Click Here'} />
    </div>
  )
}

export default HigherOrderComp
