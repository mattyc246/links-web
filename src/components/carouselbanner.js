import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel"

const StyledCarouselItem = styled(Carousel.Item)`
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
  }
`

const CarouselBanner = ({ images }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      {images.map(image => {
        return (
          <StyledCarouselItem key={image.originalId} interval={5000}>
            <Img
              className="d-block w-100"
              fluid={image.fluid}
              alt={image.alt}
            />
          </StyledCarouselItem>
        )
      })}
    </Carousel>
  )
}

export default CarouselBanner
