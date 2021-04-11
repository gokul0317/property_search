import React from 'react'
import styled from 'styled-components'
import VerticalSeperator from '../UiComponents/VerticalSeperator'

export default function Negotiator({negotiator}) {
    const fromatPhone = negotiator.Phone ? `+${negotiator.Phone}` : ''
    const imageUrl = negotiator.Image && negotiator.Image.url ? negotiator.Image.url : ''
    return (
        <NegotiatorContainer>
            <NegotiatorImage src={imageUrl} />
            <NegotiatorDescriptionContainer>
                <NegotiatorName>
                    {negotiator.Name || ''}
                </NegotiatorName>
                <NegotiatorTitle>
                    {negotiator.Designation || ''}
                </NegotiatorTitle>
                <NegotiatorContact>
                    <NegotiatorContactNumber>{fromatPhone}</NegotiatorContactNumber>
                    {fromatPhone && <VerticalSeperator />}
                    <NegotiatorContactEmail>{negotiator.Email || ''}</NegotiatorContactEmail>
                </NegotiatorContact>
            </NegotiatorDescriptionContainer>
        </NegotiatorContainer>
    )
}

const NegotiatorContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

const NegotiatorImage = styled.img`
    width: 100px;
    height: 100px;
`

const NegotiatorDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const NegotiatorName = styled.p`
    font-size: 18px;
    font-weight: bold;
`
const NegotiatorTitle = styled.div``

const NegotiatorContact = styled.div`
    display: flex;  
    gap: 5px;
    margin-top: 5px;

`
const NegotiatorContactEmail = styled.div``
const NegotiatorContactNumber = styled.div``