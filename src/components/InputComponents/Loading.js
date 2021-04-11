import React from 'react'
import styled from 'styled-components';

export default function Loading() {
    return (
        <LoadingConatainer>
            <p>Loading...</p>
        </LoadingConatainer>
    )
}

const LoadingConatainer = styled.div`
    margin: 0 auto;
`