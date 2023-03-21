import { Box } from '@chakra-ui/react';

const CourseTitle = ({ children }) => (
  <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
    {children}
  </Box>
);

export default CourseTitle;
