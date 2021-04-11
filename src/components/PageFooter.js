import React from 'react'
import styled from 'styled-components';

export default function PageFooter() {
    return (
        <FooterContainer>
            <FooterText>
                footer section
            </FooterText>
        </FooterContainer>
    )
}



const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #e4e0e2;
`;

const FooterText = styled.p`
  font-size: 24px;
  text-transform: capitalize;
`;