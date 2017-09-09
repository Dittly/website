import React from 'react'
import PropTypes from 'prop-types'
import {graphql, compose} from 'react-apollo'
import {getProjectTypes, createProject} from './gq'

import CreateProjectForm from '../../../components/project/create-form'
import HeaderBar from '../../../components/header-bar'
import Box from '../../../components/box'

export class Create extends React.Component {
  onSubmit = event => {
    const data = new FormData(event.target)

    event.preventDefault()
    event.stopPropagation()

    this.props
      .submitProject({
        title: data.get('title'),
        location: data.get('location'),
        type: data.get('type'),
        userId: this.props.loggedInUser.user.id
      })
      .then(() => {
        console.log('SUCCESS. PROJECT CREATED!')
      })
      .catch(error => {
        console.log('ERROR. PROJECT NOT CREATED.', error)
      })
  }

  render() {
    const {projectTypes} = this.props

    return (
      <div>
        <HeaderBar>Create a Project</HeaderBar>
        <Box bg="#fff" p={1}>
          <CreateProjectForm
            onSubmit={this.onSubmit}
            projectTypes={projectTypes}
          />
        </Box>
      </div>
    )
  }
}

Create.propTypes = {
  submitProject: PropTypes.func.isRequired,
  loggedInUser: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  projectTypes: PropTypes.array
}

export default compose(
  graphql(getProjectTypes, {
    name: 'projectTypesData',
    props: /* istanbul ignore next */ ({projectTypesData}) => ({
      projectTypes: projectTypesData.loading
        ? []
        : projectTypesData.__type.enumValues.map(enumValue => enumValue.name)
    })
  }),
  graphql(createProject, {
    name: 'createProject',
    props: /* istanbul ignore next */ ({createProject}) => ({
      submitProject: ({title, location, type, userId}) =>
        createProject({
          variables: {title, location, type, userId}
        })
    })
  })
)(Create)
