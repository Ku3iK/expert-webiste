import React from 'react';
import styled from 'styled-components';

import Partner from './Partner';
import P2 from '../P2/P2';
import H1 from '../H1/H1'
import Button from '../Button/Button';
import img1 from '../../../static/durtexLogo.png';
import img2 from '../../../static/fartProductLogo.png';
const Partners = () => {
    return (
        <PratnersWrapper>
            <H1>Nasi Partnerzy</H1>
            <div className="wrapper">
                <Partner file={img1}>
                    <P2>
                        Drutex to wiodący producent okien w Europie. Jest to firma z potencjałem produkcyjnym, która jest w stanie wytwarzać 7000 okien dziennie.
                    </P2>
                    <Button>
                        Zobacz więcej
                    </Button>
                </Partner>
                <Partner file={img2}>
                    <P2>
                        FART PRODUKT jest producentem nowoczesnych systemów osłonowych. Firma istnieje na rynku od 1994 roku i gwarantuje asortyment najwyższej jakości.
                    </P2>
                    <Button>
                        Zobacz więcej
                    </Button>
                </Partner>
            </div>
        </PratnersWrapper >
    );
}

export default Partners;

const PratnersWrapper = styled.section`
    margin: 20rem 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 12rem 0;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 6rem;
        & > * {
            margin-right: 4rem;
            &:last-child {
                margin: 0;
            }
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            flex-direction: column;
            & > * {
                margin-bottom: 6rem;
                margin-right: 0;
                &:last-child {
                    margin: 0;
                }
            }
        }
    }
`;