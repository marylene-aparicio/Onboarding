import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import colors from '/imports/utils/colors';

const TitleH1 = ({ children, ...props }) => <h1 {...props}>{children}</h1>;
const TitleH2 = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
const TitleH3 = ({ children, ...props }) => <h3 {...props}>{children}</h3>;
const TitleH4 = ({ children, ...props }) => <h4 {...props}>{children}</h4>;
const TitleH5 = ({ children, ...props }) => <h5 {...props}>{children}</h5>;
const TitleH6 = ({ children, ...props }) => <h6 {...props}>{children}</h6>;

const MultiTitle = (props) => {
  const Component = useMemo(() => {
    switch (props.level) {
      case 1:
      case '1':
        return TitleH1;
      case 2:
      case '2':
        return TitleH2;
      case 3:
      case '3':
        return TitleH3;
      case 4:
      case '4':
        return TitleH4;
      case 5:
      case '5':
        return TitleH5;
      default:
        return TitleH6;
    }
  }, []);

  return <Component {...props} />;
};

const Title = styled(MultiTitle)`
  padding: 0.5em;
  padding-bottom: 1.5em;
  font-size: ${({ level }) => {
      if (level === '1') {
        return css`3em`;
      } else if (level === '2') {
        return css`3em`;
      } else if (level === '3') {
        return css`2em`;
      } else if (level === '4') {
        return css`1.5em`;
      } else if (level === '5') {
        return css`1em`;
      } 
      return css`0.5em`;
    }};
  color: ${({ color }) => {
    if (colors[color]) {
      return colors[color];
    }
    return colors.black;
  }};
  width: ${({ width }) => {
    if (width === 'width50') {
      return css`50%`;
    }
  }};
  text-align: ${({ align }) => {
    if (align === 'center') {
      return css`center`;
    }
  }};
`;


export default Title;

// EXEMPLE :
// <Title level={1}></Title>
// <Title level="1"></Title>

