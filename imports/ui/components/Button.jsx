import React, { useMemo } from 'react';
import styled from 'styled-components';
import colors from '/imports/utils/colors';

import { Link } from 'react-router-dom';

const ButtonHtml = ({ children, ...props }) => <button {...props}>{children}</button>;

// Composant "Logique" de bouton
const MultiToolButton = ({
  content, to, children, ...props
}) => {
  const Component = useMemo(() => {
    if (to) {
      return Link;
    }

    return ButtonHtml;
  }, [to]);

  return (
  // retourne "children" si il est "truthy" ou content sinon
  // correspond à :
  // children ? children : content
    <Component {...props} to={to}>{children || content}</Component>
  );
};

// J'ajoute du style à mon composant "MultiToolButton", et je l'exporte.
const Button = styled(MultiToolButton)`
    background-color: ${({ bgColor }) => {
    if (colors[bgColor]) {
      return colors[bgColor];
    }

    return colors.black;
  }};
    /* background-color: ${({ color }) => colors[color] || colors.dark1}; */
    color: white;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 30px;
    margin: 0.2rem;
    border: none;
    width: 100%;

    /*
        attention pirouette, graçe à la magie de styled-components,
        on récupère la couleur choisie, au format #rrggbb, pour y accoler
        "aa", donant une notation avec transparence :
        #rrggbbaa
        "aa" est une valeur hexadécimale. Vous pouvez faire varier cette
        valeur entre "00" et "ff".
    */
    :hover {
        background-color: ${({ color }) => {
    if (colors[color]) {
      return colors[color];
    }

    return colors.dark1;
  }}aa;
        color: white;
    }
`;

export default Button;
