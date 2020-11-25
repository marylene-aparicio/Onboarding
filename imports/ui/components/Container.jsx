import styled, { css } from 'styled-components';

import colors from '/imports/utils/colors';

const Container = styled.div`
  height: 100vh;

  background-color: ${({ bgColor }) => {
    if (colors[bgColor]) {
      return colors[bgColor];
    }
    return colors.greyBackground;
  }};

  width: ${({ width }) => {
    if (width === '80%') {
      return css`80%`;
    }
    if (width === '60%') {
      return css`60%`;
    }
    if (width === '50%') {
      return css`50%`;
    }
    if (width === '30%') {
      return css`30%`;
    }
    return css`100%`;
  }}; 

  /* Téléphone */
  @media screen and (max-width: 768px) {
      h1: 0.2em;
  }

  /* Tablette */
  @media screen and (min-width: 769px) and (max-width: 991px) {
      padding-left: auto;
      padding-right: auto;
      h1: 1.5em;
  }

  /* Écran */
  @media screen and (min-width: 992px) and (max-width: 1199px) {
      padding-left: auto;
      padding-right: auto;
      h1: 1.2em;
  }

  /* Écran large */
  @media screen and (min-width: 1200px) {
      padding-left: auto;
      padding-right: auto;
      h1: 1em
  }
`;

export default Container;
