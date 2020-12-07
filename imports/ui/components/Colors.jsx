import styled, { css } from 'styled-components';
import colors from '/imports/utils/colors';

const Colors = styled.div`
  background-color: ${({ background }) => {
    if (background === 'white') {
      return css`${colors.white}`;
    }
    if (background === 'black') {
      return css`${colors.black}`;
    }
    return css`${colors.greyBackground}`;
  }};
  
`;

export default Colors;
