import React from 'react'
import styled from 'styled-components'

export default function LeftSection({ images }) {
    const [mainImage, ...allImages] = images
    const mainUrl = mainImage && mainImage.url ? mainImage.url : ''
    return (
        <ImageGalleryConatainer>
            <MainImageConatainer>
                <MainImage src={mainUrl} />
            </MainImageConatainer>
            <SubImageConatainer>
                {allImages.map(image => <SubImage key={image.id} src={image.url || ''}/>)}
            </SubImageConatainer>
        </ImageGalleryConatainer>
    )
}

const ImageGalleryConatainer = styled.div`
    width: 100%; 
    margin: 1em;
`;

const MainImage = styled.img`
    width: 95%;
    background-attachment: cover;
    :hover {
        opacity: .4;
    }
    transition: all ease-in;
`;

const SubImage = styled.img`
    width: 47%;
    place-items: space-evenly;
    background-attachment: cover;
    :hover {
        opacity: .4;
    }
    transition: all ease-in;
`;

const SubImageConatainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2px;
`
const MainImageConatainer = styled.div`
    width: 100%;
`;