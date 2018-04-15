import BasePageComponent from '../components/base-page';
import withData from '../utils/apollo/with-data';
import Layout from '../components/layouts';
import IndexContent from '../src';

export class Index extends BasePageComponent {
  render() {
    return (
      <Layout>
        <IndexContent {...this.props} />
      </Layout>
    );
  }
}

export default withData(Index);
