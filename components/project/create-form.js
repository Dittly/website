import PropTypes from 'prop-types'

import Button from '../button'

import Input from '../../components/input'

const CreateForm = ({projectTypes, onSubmit}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="create-project-title">
      <br />Project Title*<br />
      <Input
        id="create-project-title"
        name="title"
        placeholder="e.g. Kitchen Makeover"
        type="text"
      />
    </label>
    <label htmlFor="create-project-location">
      <br />
      <br />Where are you building this project?<br />
      <Input
        id="create-project-location"
        name="location"
        placeholder="Start typing a location"
        type="text"
      />
    </label>
    <label htmlFor="create-project-label">
      <br />
      <br />What kind of project is it?<br />
      <select disabled id="create-project-label" name="label">
        <option>Remodel</option>
        <option>Rebuild</option>
        <option>Renovation</option>
        <option>Outdoor Building</option>
      </select>
      <select id="create-project-type" name="type">
        {projectTypes &&
          projectTypes.map(projectType => (
            <option key={projectType} value={projectType}>
              {projectType}
            </option>
          ))}
      </select>
    </label>
    <br />
    <br />
    <Button>Create</Button>
  </form>
)

CreateForm.propTypes = {
  projectTypes: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default CreateForm
