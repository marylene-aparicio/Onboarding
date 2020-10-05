import styled from 'styled-components';
import colors from '/imports/utils/colors';

const Container = styled.div`
    background-color: ${colors.background};
    color: white;
    height: 100vh;

    /* Téléphone */
    @media screen and (max-width: 768px) {
        width: auto;
        padding-left: 1em;
        padding-right: 1em;
    }

    /* Tablette */
    @media screen and (min-width: 769px) and (max-width: 991px) {
        width: 723px;
        padding-left: auto;
        padding-right: auto;
    }

    /* Écran */
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        width: 933px;
        padding-left: auto;
        padding-right: auto;
    }

    /* Écran large */
    @media screen and (min-width: 1200px) {
        width: 1127px;
        padding-left: auto;
        padding-right: auto;
    }
`;

export default Container;
