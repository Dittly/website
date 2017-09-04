import PropTypes from 'prop-types'

import styled from 'styled-components'
import Button from '../button'
import { border, boxShadows, neutrals, typography } from '../../styles/constants'



const Input = styled.input`
  display: inline-block;
  padding: 12px;
  margin: 4px 0;
  width: 100%;
  resize: none;
  -webkit-appearance: none;

  border: 1px solid ${neutrals.neutral40};
  border-radius: ${border.radius};

  font-family: Rubik;
  color: ${neutrals.neutral50};
  font-size: 14px;

    &::placeholder {
    color: ${neutrals.neutral40};
  }
`

const CreateForm = ({projectTypes, onSubmit}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="create-project-title"><br />Project Title*<br />
      <Input id="create-project-title" name="title" placeholder="e.g. Kitchen Makeover" type="text" />
    </label>
    <label htmlFor="create-project-location"><br /><br />Where are you building this project?<br />
      <Input id="create-project-location" name="location" placeholder="Start typing a location" type="text" />
    </label>
    <label htmlFor="create-project-label"><br /><br />What kind of project is it?<br />
      <select disabled id="create-project-label" name="label">
        <option>Remodel</option>
        <option>Rebuild</option>
        <option>Renovation</option>
        <option>Outdoor Building</option>
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
    <Button primary>Create</Button>
  </form>
)

CreateForm.propTypes = {
  projectTypes: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default CreateForm
