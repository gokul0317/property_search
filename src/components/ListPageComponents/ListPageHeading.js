import React from 'react'
import styled from 'styled-components';

export default function ListPageHeading() {
    return (
        <ListPageHeadingContainer>
            <PageHeading>Property for sale</PageHeading>
        </ListPageHeadingContainer>
    )
}


const ListPageHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  margin-bottom:1em;
`;

const PageHeading = styled.p`
  font-size: 24px;
  font-weight: 700px;
  text-transform: capitalize;
`;
