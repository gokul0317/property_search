import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { fetchProperties } from '../reducers/PropertyReducer/property.actions'
import RightSection from '../components/SingleViewComponents/RightSection'
import LeftSection from '../components/SingleViewComponents/LeftSection'

function SinglePropertyView({ propertyReducer }) {
    const { selectedProperty } = propertyReducer
    
    if (!Object.keys(selectedProperty).length) return <Redirect to='/' />

    return (
        <SinglePropertyViewCotainer>
            <Section1>
                <LeftSection images={selectedProperty.Images || []} />
            </Section1>
            <Section2>
                <RightSection property={selectedProperty}  />
            </Section2>
        </SinglePropertyViewCotainer>
    )
}

const SinglePropertyViewCotainer = styled.div`
  min-height: 50vh;  
  margin: 10px;
  display: flex;
`

const Section1 = styled.div`
    width: 100%;
`;
const Section2 = styled.div`
    width: 100%;
`;

const mapStateToProps = ({ propertyReducer }) => {
    return {
        propertyReducer,
    };
};

export default connect(mapStateToProps, { fetchProperties })(SinglePropertyView);
