import React from 'react'

const Course = (props) => {
    const { name, setShowClasses } = props;
  return (
    <div onClick={()=>setShowClasses()}>
       {name}
    </div>
  )
}

export default Course
