import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchProperties } from '../reducers/PropertyReducer/property.actions'
import ListPageHeading from '../components/ListPageComponents/ListPageHeading'
import ListPageFilter from '../components/ListPageComponents/ListPageFilter'
import PropertyList from '../components/ListPageComponents/PropertyList'

const ListProperty = ({ fetchProperties }) => {
    useEffect(() => {
        fetchProperties()
    }, [fetchProperties])
    return (<>
        <ListPageHeading />
        <ListPageFilter />
        <PageBodyContainer>
            <PropertyList />
        </PageBodyContainer>
    </>
    )
}

const PageBodyContainer = styled.div`
  min-height: 50vh;  
  margin: 10px;
`;


export default connect(null, { fetchProperties })(ListProperty);

