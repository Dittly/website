import PropTypes from 'prop-types';
import main from './main';

const layouts = {
  main
};

const getLayout = (name) => layouts[name];

const WithLayout = ({ children, name }) => {
  const Layout = getLayout(name);
  return <Layout name={name}>{children}</Layout>;
};

WithLayout.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.oneOf(Object.keys(layouts))
};

WithLayout.defaultProps = {
  name: 'main'
};

export default WithLayout;
