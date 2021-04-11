import React from 'react'
import styled from 'styled-components'
import ShareSection from './ShareSection'
import DescriptionSection from './DescriptionSection'
import Negotiator from './Negotiator'
import LongDescription from './LongDescription'
import MapView from './MapView'

export default function RightSection({ property }) {
    console.log(property)
    return (
        <RightSectionContainer>
            <ShareSection />
            <DescriptionSection property={property} />
            <LongDescription description={property.Description || ''} />
            <Negotiator negotiator={property.Negotiator || {}} />
            <MapView Latitude={property.Latitude || 0} Longitude={property.Longitude || 0} />
        </RightSectionContainer>
    )
}


const RightSectionContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  justify-content: center;
`;