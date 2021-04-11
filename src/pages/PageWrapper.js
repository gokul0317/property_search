import React from 'react'
import styled from 'styled-components'

import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'

export default function PageWrapper({ children }) {
    return (
        <PageContainer>
            <PageHeader />
             {children}
            <PageFooter />
        </PageContainer>
    )
}

const PageContainer = styled.div`
  margin: 0 .5em;
`;
