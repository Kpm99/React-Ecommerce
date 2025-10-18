import React from 'react'

const Navigator = ({name}) => {
  return (
    <div style={{display:"flex",marginLeft:"1rem",}}>
        <h3>Home</h3><p>/{name}</p>
    </div>
  )
}

export default Navigator
