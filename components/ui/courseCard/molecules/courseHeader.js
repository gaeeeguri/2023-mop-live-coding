import CourseTag from '@/components/ui/courseCard/atoms/courseTag';
import Difficulty from '@/components/ui/courseCard/atoms/difficulty';
import { Box } from '@chakra-ui/react';

const CourseHeader = ({ tags, level }) => (
  <Box display='flex' alignItems='baseline'>
    {tags.map((value) => (
      <CourseTag key={value}>{value}</CourseTag>
    ))}
    <Difficulty level={level} />
  </Box>
);

export default CourseHeader;
