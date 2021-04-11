import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import Loading from '../InputComponents/Loading'

import PropertyListCard from './PropertyListCard'
import { setSelectedProperty } from '../../reducers/PropertyReducer/property.actions'

function PropertyList({ propertyReducer, setSelectedProperty }) {
    const { propertyList, listLoading } = propertyReducer
    if (listLoading) return <Loading />
    return (
        <ListConatiner>
            {!propertyList.length ? <NoItem>No Item Found</NoItem> : <>
               {propertyList.map((property, i) => <PropertyListCard selectItem={setSelectedProperty} key={i} property={property} />)}
            </>}
        </ListConatiner>
    )
}

const ListConatiner = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

const NoItem = styled.div`
    text-align: center;
    
`

const mapStateToProps = ({ propertyReducer }) => {
    return {
        propertyReducer,
    };
};


export default connect(mapStateToProps, { setSelectedProperty })(PropertyList);
