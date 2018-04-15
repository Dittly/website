import styled from 'styled-components';

import Card from '/components/card';
import Add from '/components/add';
import UiButton from '/components/ui-button';

import { neutrals } from '/styles/constants';

const TextArea = styled.textarea`
  webkit-appearance: none;
  border: 0;
  font-family: Rubik;
  color: ${neutrals.neutral50};
  font-size: 16px;
  padding: 12px;
  width: 100%;
  resize: none;

  &::placeholder {
    color: ${neutrals.neutral40};
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  border-top: 1px solid;
  border-color: ${neutrals.neutral15};
`;

const AddPost = () => (
  <Card>
    <TextArea placeholder={'How is your progress going?'} />
    <FlexContainer>
      <Add>+ Add photo or video</Add>
      <UiButton>Post</UiButton>
    </FlexContainer>
  </Card>
);

export default AddPost;
