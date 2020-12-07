import styled, { css }  from 'styled-components';
import colors from '/imports/utils/colors';

const Input = styled.input`
  background-color: ${colors.white};
  font-size: 1em;
  padding: 0.5em;
  margin: 0.3em;
  border: 1px solid black;
  border-radius: 30px;
  :focus {
      outline: none;
  }

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

`;

export default Input;
