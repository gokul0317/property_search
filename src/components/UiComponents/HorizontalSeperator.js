import React from 'react'
import styled from 'styled-components'

export default function HorizontalSeperator({ style }) {
    return (
        <Separator style={style} />
    )
}

const Separator = styled.div`
  border: 0;
  border-bottom: 1px solid #CCC;
  width: 100%;
  margin: 0 auto;
`