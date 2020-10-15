import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ProjectsContent } from '../../layouts/ProjectsContent/ProjectsContent'

export class Projects extends Component {
  render() {
    return (
      <div>
        <ProjectsContent />
      </div>
    )
  }
}

export default withRouter(Projects)
