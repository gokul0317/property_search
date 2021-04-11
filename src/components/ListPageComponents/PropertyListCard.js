import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { formatDescription, navigateTo } from '../../helpers'
export default function PropertyListCard({ property, selectItem }) {
    const { Title, Images, Description, Price } = property
    const history = useHistory()
    const onNavigate = () => {
        selectItem(property)
        navigateTo(history, `/view/${property.id}`)
    }
    const forrmatedString = formatDescription(Description, 40, true)
    const imageUrl = Images.length && Images[0].url ? Images[0].url : ''

    return (
        <CardContainer>
                <CardImage src={imageUrl} onClick={onNavigate} />
                <CardFooter>
                    <CardTitle onClick={onNavigate}>{Title}</CardTitle>
                    <CardDescription>{forrmatedString}</CardDescription>
                    <CardDescription>{Price} €</CardDescription>
                </CardFooter>
        </CardContainer>
    )
}


const CardContainer = styled.div`
    flex: 1;
    justify-items: center;
    max-width: 30vw;
`;



const CardImage = styled.img`
    margin: 1rem;
    width: 350px;
    height: 200px;
    cursor: pointer;
    background-attachment: cover;
    transition: all ease-in;
    :hover {
       opacity: .6;
    }
`;

const CardFooter = styled.div`
    text-align: center;
`;

const CardTitle = styled.div`
    margin: .5rem;
    cursor: pointer;
    :hover {
       opacity: .6;
    }
`;
const CardDescription = styled.div`
    margin: .5rem;
`;
