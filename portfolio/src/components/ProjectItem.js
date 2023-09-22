import React from 'react'
  
const ProjectItem = () => {
  return (
    <div className="projectItem">
      <div styles={{backgroundImage: `url(${image})`}} className="bgImage" />
      <h1>{props.name}{props.description}{props.tech}</h1>  
    </div>
  )
}

export default ProjectItem