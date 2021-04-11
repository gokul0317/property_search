import React from 'react'
import styled from 'styled-components'
import { trimDescription, formatDescription } from '../../helpers/index'

export default function LongDescription({description}) {
    const formattedLongDescription = trimDescription(description, true)
    return (
        <LongDescriptionContainer>
            {formattedLongDescription}
        </LongDescriptionContainer>
    )
}

const LongDescriptionContainer = styled.div`
    padding: .5em;
    margin: .5em;
    line-height: 1.5 rem;
    word-wrap: break-word;
`
