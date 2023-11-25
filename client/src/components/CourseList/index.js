import React, { useState } from 'react'
import Course from './Course'

const CoursesList = ({setShowClasses}) => {
  return (
    <div>
      <Course name='AI/ML' setShowClasses={ setShowClasses } />
       <Course name='python' setShowClasses={ setShowClasses } />
       <Course name='Java' setShowClasses={ setShowClasses } />
       <Course name='DAA' setShowClasses={ setShowClasses } />
    </div>
  )
}

export default CoursesList
