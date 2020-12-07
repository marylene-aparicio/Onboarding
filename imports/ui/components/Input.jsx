import styled from 'styled-components';
import colors from '/imports/utils/colors';

const Input = styled.input`
  background-color: ${colors.white};
  font-size: 1em;
  padding: 0.5em;
  margin: 0.3em;
  border: 1px solid black;
  border-radius: 30px;
  width: 100%;
  :focus {
      outline: none;
  }
`;

export default Input;
