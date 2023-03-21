import { Box } from '@chakra-ui/react';
import CourseHeader from '@/components/ui/courseCard/molecules/courseHeader';
import CourseTitle from '@/components/ui/courseCard/atoms/courseTitle';
import CourseButtons from '@/components/ui/courseCard/molecules/courseButtons';

const CourseBody = ({ children, level, tags, detailLink, dashboardLink }) => (
  <Box
    p='4'
    display='flex'
    flexDirection='column'
    justifyContent='space-between'
    flexGrow={1}
  >
    <Box>
      <CourseHeader level={level} tags={tags} />
      <CourseTitle>{children}</CourseTitle>
    </Box>
    <CourseButtons detailLink={detailLink} dashboardLink={dashboardLink} />
  </Box>
);

export default CourseBody;
