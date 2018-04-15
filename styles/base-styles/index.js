import { injectGlobal } from 'styled-components';
import normalizeStyle from './normalize';
import generalStyle from './general';
import fontSizeStyle from './font-size';

/* eslint-disable no-unused-expressions */
injectGlobal`
${normalizeStyle}
${generalStyle}
${fontSizeStyle}
`;
/* eslint-enable no-unused-expressions */
