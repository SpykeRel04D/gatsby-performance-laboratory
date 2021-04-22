import React from "react"

import { ImageWrapper } from "./styles"

interface IProps {
  src: string
  aspectRatio: number
  alt?: string
  srcSet?: string
  className?: string
}

const CustomImage = ({ src, aspectRatio, alt, srcSet, className }: IProps) => {
  return (
    <ImageWrapper ratio={aspectRatio} className={className || "image"}>
      <img src={src} srcSet={srcSet} alt={alt || ""} />
    </ImageWrapper>
  )
}

export default CustomImage
