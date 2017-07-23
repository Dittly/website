import React from 'react'
import {graphql, compose} from 'react-apollo'
import {getProjectTypes, createProject} from './gq'

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
        <form onSubmit={this.onSubmit}>
          <label htmlFor="create-project-title"><br />Project Title*<br />
            <input id="create-project-title" name="title" placeholder="e.g. Kitchen Makeover" type="text" />
          </label>
          <label htmlFor="create-project-location"><br /><br />Where are you building this project?<br />
            <input id="create-project-location" name="location" placeholder="Start typing a location" type="text" />
          </label>
          <label htmlFor="create-project-label"><br /><br />What kind of project is it?<br />
            <select disabled id="create-project-label" name="label">
              <option>Labels go here</option>
            </select>
            <select id="create-project-type" name="type">
              {
                projectTypes && projectTypes.map((projectType) => (
                  <option key={projectType} value={projectType}>{projectType}</option>
                ))
              }
            </select>
          </label>
          <br /><br />
          <button>Create</button>
        </form>
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
