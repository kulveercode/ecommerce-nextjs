import React from 'react'

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1280px] px-10 md:px-24 mx-auto ${className || ""}`}>{children}</div>
  )
}


export default Wrapper