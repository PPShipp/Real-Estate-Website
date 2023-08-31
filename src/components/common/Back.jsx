import React from "react"
const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container' > 
          <span style={{marginTop: '20px'}}>{name}</span>
          <h1 >{title}</h1>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}

export default Back
