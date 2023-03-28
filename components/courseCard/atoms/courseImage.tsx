import { Image } from '@chakra-ui/react';

export interface CourseImageProps {
  imageSrc: string;
  imageAlt: string;
}

const CourseImage = ({ imageSrc, imageAlt }: CourseImageProps) => (
  <Image
    src={imageSrc}
    alt={imageAlt}
    objectFit='cover'
    maxW={{ base: '100%', sm: '40%' }}
  />
);

export default CourseImage;
