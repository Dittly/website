/* eslint-env jest */
jest.mock('../../../utils/ga');

import { mountComponentWithApolloProvider } from '/utils/test-helper';

import { Details } from '/pages/projects/details';
import MainLayout from '/components/layouts/main';
import DetailsContent from '/src/projects/details';

const getMockCurrentResult = () =>
  jest.fn().mockReturnValue({
    loading: false,
    data: {
      Project: {
        id: 'test-project-id',
        location: 'test-project-location',
        title: 'test-project-title',
        type: 'test-project-type',
        user: {}
      }
    }
  });

describe('pages/projects/details', () => {
  const defaultProps = {
    url: {
      query: {
        id: ''
      }
    }
  };

  it(`verifies ${Details.name} renders correctly`, () => {
    const wrapper = mountComponentWithApolloProvider(
      <Details {...defaultProps} />,
      getMockCurrentResult()
    );
    expect(wrapper.length).toBe(1);
  });

  it(`verifies the MainLayout renders correctly`, () => {
    const wrapper = mountComponentWithApolloProvider(
      <Details {...defaultProps} />,
      getMockCurrentResult()
    );
    expect(wrapper.find(MainLayout).length).toBe(1);
  });

  it(`verifies the DetailsContent renders correctly`, () => {
    const wrapper = mountComponentWithApolloProvider(
      <Details {...defaultProps} />,
      getMockCurrentResult()
    );
    expect(wrapper.find(DetailsContent).length).toBe(1);
  });
});
