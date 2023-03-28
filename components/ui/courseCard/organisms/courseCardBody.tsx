import { Box } from '@chakra-ui/react';
import CourseHeader, {
  CourseHeaderProps,
} from '@/components/ui/courseCard/molecules/courseHeader';
import CourseTitle, {
  CourseTitleProps,
} from '@/components/ui/courseCard/atoms/courseTitle';
import CourseButtons, {
  CourseButtonsProps,
} from '@/components/ui/courseCard/molecules/courseButtons';

export interface CourseCardBodyProps
  extends CourseHeaderProps,
    CourseTitleProps,
    CourseButtonsProps {}

const CourseCardBody = ({
  courseTitle,
  level,
  tags,
  detailLink,
  dashboardLink,
}: CourseCardBodyProps) => (
  <Box
    p='4'
    display='flex'
    flexDirection='column'
    justifyContent='space-between'
    flexGrow={1}
  >
    <Box>
      <CourseHeader level={level} tags={tags} />
      <CourseTitle courseTitle={courseTitle} />
    </Box>
    <CourseButtons detailLink={detailLink} dashboardLink={dashboardLink} />
  </Box>
);

export default CourseCardBody;
