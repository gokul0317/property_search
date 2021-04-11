import React from 'react'
import styled from 'styled-components';


export default function Dropdown({ options, title, selected, onChange }) {
    const findCurrentItem = (value) => options.find(option => option.value && String(option.value) === value)
    const onChageOptions = (value) => { 
        const currentValue = findCurrentItem(value)
        onChange(currentValue || {})
    }
    const currentValue = selected && selected.value ? selected.value : ''
    return (
        <DropdownContainer>
        <DropdownItem value={currentValue} onChange={(e) => { onChageOptions(e.target.value) }} >
            {<option value={''}  disabled>{title || 'Select value'}</option>}
            {options && options.length && options.map((item) => <option key={item.value} value={item.value} >{item.label}</option>  )}    
        </DropdownItem>
        </DropdownContainer>
    )
}


const DropdownContainer = styled.div`
    display: flex;
    width: 100%;
`;

const DropdownItem = styled.select`
    flex: 1;
    padding: .5em;
    border: none;
    text-align: center;
    outline-width: 0;
    outline: none;
`;