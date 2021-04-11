import React from 'react'
import styled from 'styled-components'
import { FaHome } from 'react-icons/fa'
import FactsSection from './FactsSection'
import VerticalSeperator from '../UiComponents/VerticalSeperator'
import { trimDescription } from '../../helpers/index'

export default function DescriptionSection({ property }) {
    // console.log(property)
    const { Price, Bedrooms, Floor_Area, Description } = property
    const bedCount = `${Bedrooms || 0} bed${Bedrooms && Bedrooms.length ? ` 's` : ``}`
    const floorArea = Floor_Area ? `${Floor_Area} sqm` : `0 sqm`
    const description = Description ? Description : ''
    const formattedDescription = trimDescription(description)

    return (
        <DescriptionSectionContainer>
            <PriceConatiner>
                <PriceSection>{Price} €</PriceSection>
                <PriceSub>{bedCount}</PriceSub>
                <VerticalSeperator />
                <PriceSub>{floorArea}</PriceSub>
            </PriceConatiner>
            <ShortDescription>
                {formattedDescription}
            </ShortDescription>
            <ContactUsSection>
                <FaHome color="#a3a233" />
                <ContactUsLink href="#">Please contact us</ContactUsLink>
            </ContactUsSection>
            <ContactButton>Contact Agent</ContactButton>
            <FactsSection property={property} />
        </DescriptionSectionContainer>
    )
}

const DescriptionSectionContainer = styled.div`
    margin: .5em;
`

const PriceConatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

const PriceSection = styled.p`
    font-size: 20px;
    font-weight: bold;
`
const PriceSub = styled.p``
const ShortDescription = styled.div`
    word-wrap: break-word;
`

const ContactUsSection = styled.div`
    margin-top: 1em;
    display: flex;
    gap: .5em;
`

const ContactUsLink = styled.a`
    text-transform: capitalize;
    color: #a3a233;
`
const ContactButton = styled.button`
    margin-top: 1rem;
    flex-grow: 1;
    width: 85%;
    padding: 10px;
    justify-content: center;
    background-color: black;
    color: white;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    outline-width: 0;
    cursor: pointer;
    :hover {
        opacity: .6;
    }
    text-transform: uppercase;
`