import React from 'react'

const Button = ({customclass,onclick,text}) => {
  return (
    <button className={customclass} onClick={onclick}>
        {text}
    </button>
  )
}

export default Button