import { Box, useColorModeValue } from '@chakra-ui/react';
import CourseImage, {
  CourseImageProps,
} from '@/components/courseCard/atoms/courseImage';
import CourseCardBody, {
  CourseCardBodyProps,
} from '@/components/courseCard/organisms/courseCardBody';

export interface CourseCardProps
  extends CourseImageProps,
    CourseCardBodyProps {}

const CourseCard = ({
  imageSrc,
  imageAlt,
  tags,
  level,
  dashboardLink,
  detailLink,
  courseTitle,
}: CourseCardProps) => (
  <Box
    maxW='container.md'
    borderWidth='1px'
    borderRadius='lg'
    overflow='hidden'
    display={{ base: 'block', sm: 'flex' }}
    background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    flexDirection={{ base: 'column', sm: 'row' }}
    mb={4}
  >
    <CourseImage imageSrc={imageSrc} imageAlt={imageAlt} />
    <CourseCardBody
      tags={tags}
      level={level}
      dashboardLink={dashboardLink}
      detailLink={detailLink}
      courseTitle={courseTitle}
    />
  </Box>
);

export default CourseCard;
