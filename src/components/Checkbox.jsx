import React from 'react'

const Checkbox = ({title,state,onchange}) => {
          return (
            <div>
            <input onChange={onchange} type='checkbox' checked={state}></input>
            {title}
          </div>
          )
};

export default Checkbox