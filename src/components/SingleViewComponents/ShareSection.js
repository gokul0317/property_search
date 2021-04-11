import React from 'react'
import { FaShareAlt, FaRegHeart } from 'react-icons/fa'
import styled from 'styled-components'
import HorizontalSeperator from '../UiComponents/HorizontalSeperator'

export default function ShareSection() {
    return (
        <>
        <ShareSectionConatiner>
            <ShareSectionItem>
            <FaShareAlt />
            </ShareSectionItem>
            <ShareSectionItem>
             <FaRegHeart />
            </ShareSectionItem>
        </ShareSectionConatiner>
        <HorizontalSeperator />
        </>
    )
}

const ShareSectionConatiner = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding: 1em;
    /* border-bottom: .5px solid rgba(34, 34, 33, .4); */
`;

const ShareSectionItem = styled.div`
    align-self: flex-end;
    margin: 0 10px;
    cursor: pointer;
    :hover {
        opacity: .4;
    }
`
