import React from 'react'

const Container = (props) => {
  return (
    <div className="container rounded-2xl mx-auto mt-20 bg-[#eeeeee]  p-5">
        {props.children}
 </div>
  )
}

export default Container