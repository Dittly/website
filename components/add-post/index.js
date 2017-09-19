import styled from 'styled-components'

import Card from '../card'
import Add from '../add'
import UiButton from '../ui-button'

const TextArea = styled.textarea`
  webkit-appearance: none;
  border: 0;
  font-family: Rubik;
  color: #9b9b9b;
  font-size: 14px;
  padding: 12px;
  width: CALC(100% - 24px);
  max-width: 375px;
  resize: none;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  border-top: 1px solid #ededed;
`

const AddPost = () => (
  <Card>
    <TextArea placeholder={'How is your progress going?'} />
    <FlexContainer>
      <Add>+ Add photo or video</Add>
      <UiButton>Post</UiButton>
    </FlexContainer>
  </Card>
)

export default AddPost
