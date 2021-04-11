import React, { useState } from 'react'
import styled from 'styled-components';
import Dropdown from '../InputComponents/Dropdown'
import { bedroomType, neighbourhoodType, prices, sortBy } from '../InitialValues'
import HorizontalSeperator from '../UiComponents/HorizontalSeperator'

export default function ListPageFilter() {
    const [selectedBedroomType, setSelectedBedroomType] = useState(bedroomType[0])
    const [selectedNeighbourhoodType, setselectedNeighbourhoodType] = useState(neighbourhoodType[0])
    const [selectedMinPrize, setSelectedMinPrize] = useState({})
    const [selectedMaxPrize, setSelectedMaxPrize] = useState({})
    const [selectedSortType, setSelectedSortType] = useState({})
    return (
        <>
            <HorizontalSeperator />
            <ListPageFilterContainer>
                <ListPageFilterContentStart>
                    <Dropdown options={bedroomType} title={'Select Bedroom Type'} selected={selectedBedroomType} onChange={setSelectedBedroomType} />
                </ListPageFilterContentStart>
                <ListPageFilterContentStart>
                    <Dropdown options={neighbourhoodType} title={'Select Neighbourhood'} selected={selectedNeighbourhoodType} onChange={setselectedNeighbourhoodType} />
                </ListPageFilterContentStart>
                <ListPageFilterContentStart>
                    <Dropdown options={prices} title={'Min Price'} selected={selectedMinPrize} onChange={setSelectedMinPrize} />
                </ListPageFilterContentStart>
                <ListPageFilterContentStart>
                    <Dropdown options={prices} title={'Max Price'} selected={selectedMaxPrize} onChange={setSelectedMaxPrize} />
                </ListPageFilterContentStart>
                <ListPageFilterContentEnd>
                    <Dropdown options={sortBy} title={'Sort By'} selected={selectedSortType} onChange={setSelectedSortType} />
                </ListPageFilterContentEnd>
            </ListPageFilterContainer>
            <HorizontalSeperator />
        </>
    )
}

const ListPageFilterContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

const ListPageFilterContentStart = styled.div`
    flex: 1;
    padding: 10px;
    align-self: flex-start;
`

const ListPageFilterContentEnd = styled.div`
    flex: 1;
    padding: 10px;
    align-self: flex-end;
`