import { Image } from '@chakra-ui/react';

const CourseImage = ({ imageSrc, imageAlt }) => (
  <Image
    src={imageSrc}
    alt={imageAlt}
    objectFit='cover'
    maxW={{ base: '100%', sm: '40%' }}
  />
);

export default CourseImage;
