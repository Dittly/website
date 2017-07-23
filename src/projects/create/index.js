import React from 'react'
import {graphql, compose} from 'react-apollo'
import {getProjectTypes, createProject} from './gq'

import CreateProjectForm from '../../../components/project/create-form'

class Create extends React.Component {
  onSubmit = (event) => {
    const data = new FormData(event.target)

    event.preventDefault()
    event.stopPropagation()

    this.props.submitProject({
      title: data.get('title'),
      location: data.get('location'),
      type: data.get('type'),
      userId: this.props.loggedInUser.user.id
    })
      .then(() => {
        console.log('SUCCESS. PROJECT CREATED!')
      })
      .catch((error) => {
        console.log('ERROR. PROJECT NOT CREATED.', error)
      })
  }

  render() {
    const {
      projectTypes
    } = this.props

    return (
      <div>
        <h1>Create a Project</h1>
        <CreateProjectForm onSubmit={this.onSubmit} projectTypes={projectTypes} />
      </div>
    )
  }
}

export default compose(
  graphql(getProjectTypes, {
    name: 'projectTypesData',
    props: ({projectTypesData}) => ({
      projectTypes: projectTypesData.loading ? [] : projectTypesData.__type.enumValues.map((enumValue) => enumValue.name)
    })
  }),
  graphql(createProject, {
    name: 'createProject',
    props: ({createProject}) => ({
      submitProject: ({title, location, type, userId}) => createProject({
        variables: {title, location, type, userId}
      })
    })
  })
)(Create)
