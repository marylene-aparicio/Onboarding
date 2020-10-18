import styled, { css } from 'styled-components';

const Flex = styled.div`
  display: flex;
  height: ${({ compact }) => (compact ? 'auto' : '100%')};
  width: ${({ compact }) => (compact ? 'auto' : '100%')};

  flex-wrap: ${({ wrap }) => {
    if (wrap === 'reverse') {
      return css`wrap-reverse`;
    }
    if (wrap) {
      return css`wrap`;
    }
    return css`no-wrap`;
  }};

  justify-content: ${({ justifyContent }) => {
    if (justifyContent === 'flex-end') {
      return css`flex-end`;
    }
    if (justifyContent === 'flex-start') {
      return css`flex-start`;
    }
    if (justifyContent === 'space-between') {
      return css`space-between`;
    }
    if (justifyContent === 'space-around') {
      return css`space-between`;
    }
    if (justifyContent === 'space-evenly') {
      return css`space-evenly`;
    }
    return css`center`;
  }};

  align-items: ${({ alignItems }) => {
    if (alignItems === 'flex-end') {
      return css`flex-end`;
    }
    if (alignItems === 'flex-start') {
      return css`flex-start`;
    }
    if (alignItems === 'strech') {
      return css`strech`;
    }
    return css`center`;
  }};

  flex-direction: ${({ column, row }) => {
    if (column === 'reverse') {
      return css`column-reverse`;
    }
    if (column) {
      return css`column`;
    }
    if (row === 'reverse') {
      return css`row-reverse`;
    }
    return css`row`;
  }};
`;

export default Flex;
