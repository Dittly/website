import HeadBannerSC from './index-sc'


const HeadBanner = ({ children }) => (
  <HeadBannerSC>
    {children}
  </HeadBannerSC>
);

HeadBanner.propTypes = {
  children: React.PropTypes
};

export default HeadBanner;
