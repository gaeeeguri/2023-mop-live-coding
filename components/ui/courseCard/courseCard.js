import { Box, useColorModeValue } from '@chakra-ui/react';
import CourseImage from '@/components/ui/courseCard/atoms/courseImage';
import CourseBody from '@/components/ui/courseCard/organisms/courseBody';

const CourseCard = ({
  imageSrc,
  imageAlt,
  tags,
  level,
  dashboardLink,
  detailLink,
  children,
}) => (
  <Box
    maxW='container.md'
    borderWidth='1px'
    borderRadius='lg'
    overflow='hidden'
    display={{ base: 'block', sm: 'flex' }}
    background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    direction={{ base: 'row', sm: 'column' }}
    mb={4}
  >
    <CourseImage imageSrc={imageSrc} imageAlt={imageAlt} />
    <CourseBody
      tags={tags}
      level={level}
      dashboardLink={dashboardLink}
      detailLink={detailLink}
    >
      {children}
    </CourseBody>
  </Box>
);

export default CourseCard;
