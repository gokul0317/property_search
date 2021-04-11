import React from 'react'
import styled from 'styled-components';

export default function Loading() {
    return (
        <LoadingConatainer class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LoadingConatainer>
    )
}

const LoadingConatainer = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
    position: relative;
    justify-content: center;
    width: 40px;
    height: 40px;
    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        margin: 6px;
        border: 4px solid #1a717e;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #1a717e transparent transparent transparent;
    }
    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`