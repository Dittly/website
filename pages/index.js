import BasePageComponent from '../components/base-page'
import withData from '../utils/apollo/with-data'
import MainLayout from '../components/layouts/main'
import IndexContent from '../src'

export class Index extends BasePageComponent {
  render() {
    return (
      <MainLayout>
        <IndexContent {...this.props} />
      </MainLayout>
    )
  }
}

export default withData(Index)
