import React from 'react'

function Btn({color,text,width,height}) {
    return (
      <div>
        <button style={{color:color ,width:width,height:height }} > text: {text}</button>
      </div>
    )
  }

export default Btn
