import React from 'react';

import Card from './Card';
import Add from './Add';
import UiButton from './UiButton';

const textAreaStyles = {
  WebkitAppearance: 'none',
  border: '0',
  fontFamily: 'Rubik',
  color: '#9B9B9B',
  fontSize: '14px',
  padding: '12px',
  width: 'CALC(100% - 24px)',
  maxWidth: '375px',
  resize: 'none'
};

const flexContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '6px',
  borderTop: '1px solid #EDEDED'
};

const AddPost = () => (
  <Card>
    <textarea
      style={textAreaStyles}
      placeholder={'How is your progress going?'}
    />
    <div style={flexContainerStyles}>
      <Add />
      <UiButton>Post</UiButton>
    </div>
  </Card>
);

export default AddPost;
