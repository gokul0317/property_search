import React from 'react'
import styled from 'styled-components'
import HorizontalSeperator from '../UiComponents/HorizontalSeperator'

export default function FactsSection({ property}) {
    const { Price_Per_Sqm, Floor_Plans, Brochure } = property
    const pricePerSqm = Price_Per_Sqm ? Price_Per_Sqm : 0
    const floorUrl = Floor_Plans && Floor_Plans[0] ? Floor_Plans[0].url : ''
    const brochureUrl = Brochure && Brochure[0] ? Brochure[0].url : ''
    return (
        <FactsSectionContainer>
            <FactSHeader>
                <FactsHeaderText>Facts & Features</FactsHeaderText>
            </FactSHeader>
            <HorizontalSeperator />
            <NeighbourhoodSection>
                <NeighbourhoodSectionItem>
                    <NeighbourhoodSectionHeading>
                        Neighbourhood:
                    </NeighbourhoodSectionHeading>
                    <NeighbourhoodSectionLink href="">
                        Fontville
                    </NeighbourhoodSectionLink>
                </NeighbourhoodSectionItem>
                <NeighbourhoodSectionItem>
                    <NeighbourhoodSectionHeading>
                        Price Per sqm:
                    </NeighbourhoodSectionHeading>
                    <NeighbourhoodSectionText>
                       €{pricePerSqm}
                    </NeighbourhoodSectionText>
                </NeighbourhoodSectionItem>
                <NeighbourhoodSectionItem>
                    <NeighbourhoodSectionHeading>
                        Brochure:
                    </NeighbourhoodSectionHeading> 
                    <NeighbourhoodSectionLink href={brochureUrl}>
                        Download Brochure
                    </NeighbourhoodSectionLink>
                </NeighbourhoodSectionItem>
                <NeighbourhoodSectionItem>
                    <NeighbourhoodSectionHeading>
                        Floor Plan:
                    </NeighbourhoodSectionHeading>
                    <NeighbourhoodSectionLink href={floorUrl}>
                        View Floor plan
                    </NeighbourhoodSectionLink>
                </NeighbourhoodSectionItem>
            </NeighbourhoodSection>
        </FactsSectionContainer>
    )
}

const FactsSectionContainer = styled.div`

`
const FactSHeader = styled.div`
    padding: .2em;
    /* border-bottom: 1px solid #2c2a2b; */
`

const FactsHeaderText = styled.p`
    font-size: 20px;
`

const NeighbourhoodSection = styled.div`
    display: flex;
    margin: .5em;
    flex-direction: column;
    gap: 5px;
`
const NeighbourhoodSectionItem = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    flex: 1;

`
const NeighbourhoodSectionHeading = styled.div`
    flex-grow: 1;
    padding: .5rem;
    width: 50%;
`
const NeighbourhoodSectionText = styled.div`
    flex-grow: 1;
    place-self: center;
    width: 50%;

`
const NeighbourhoodSectionLink = styled.a`
    flex-grow: 1;
    place-self: center;
    width: 50%;
    color: #3e443b;

`