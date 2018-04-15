import ReactGA from 'react-ga';

let isInitialized = false;

// Used for testing purposes
export const _resetInitialized = () => {
  isInitialized = false;
};

export const initGA = () => {
  ReactGA.initialize(process.env.GA_TRACKING_ID); // eslint-disable-line no-undef
  isInitialized = true;
};

export const logPageView = () => {
  if (!isInitialized) {
    initGA();
  }
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (!isInitialized) {
    initGA();
  }
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (!isInitialized) {
    initGA();
  }
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
