import React from 'react'
import styled from 'styled-components'

export default function VerticalSeperator({ style }) {
    return (
        <Separator style={style} />
    )
}

const Separator = styled.div`
  border: 0;
  border-right: 1px solid #CCC;
  padding: 0;
  margin: 0;
  min-height: 20px;
  border-radius: 50%;
`