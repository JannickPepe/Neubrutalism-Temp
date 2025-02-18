// components/CustomImage.tsx
import Image, { ImageProps } from "next/image";
import React from "react";

const CustomImage = (props: ImageProps, altText: string) => {
  // Destructure fetchPriority so it doesn't get passed in
  const { fetchPriority, ...rest } = props;
  const imageElement = <Image {...rest} alt={`Image of ${altText}`} />;
  
  // Use React.cloneElement to remove fetchPriority from the final element's props
  return React.cloneElement(imageElement, {
    ...imageElement.props,
    // Ensure fetchPriority is undefined so it doesn't render as an attribute
    fetchPriority: undefined,
  });
};

export default CustomImage;
