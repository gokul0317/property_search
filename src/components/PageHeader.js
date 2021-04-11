import React from 'react'
import styled from 'styled-components';

export default function PageHeader() {
    return (
        <HeaderContainer>
            <HeaderText>
                header section
            </HeaderText>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #e4e0e2;
`;

const HeaderText = styled.p`
  font-size: 24px;
  text-transform: capitalize;
`;