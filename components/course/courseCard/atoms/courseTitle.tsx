import { Box } from '@chakra-ui/react';

export interface CourseTitleProps {
  courseTitle: string;
}

const CourseTitle = ({ courseTitle }: CourseTitleProps) => (
  <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
    {courseTitle}
  </Box>
);

export default CourseTitle;
