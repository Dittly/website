import BasePageComponent from '/components/base-page';
import withAuth from '/components/with-auth';
import Layout from '/components/layouts';
import CreateContent from '/src/projects/create';

export class Create extends BasePageComponent {
  render() {
    return (
      <Layout>
        <CreateContent {...this.props} />
      </Layout>
    );
  }
}

export default withAuth(Create);
