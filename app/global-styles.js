import { injectGlobal } from 'styled-components';
import c from './utils/colors';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${c.base.dark};
    color: ${c.base.text};
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Signika Negative', sans-serif;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100%;
    min-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

`;
