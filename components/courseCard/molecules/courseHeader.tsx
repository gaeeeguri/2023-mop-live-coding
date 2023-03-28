import CourseTag, { Tag } from '@/components/courseCard/atoms/courseTag';
import Difficulty, {
  DifficultyProps,
} from '@/components/courseCard/atoms/difficulty';
import { Box } from '@chakra-ui/react';

export interface CourseHeaderProps extends DifficultyProps {
  tags: Tag[];
}

const CourseHeader = ({ tags, level }: CourseHeaderProps) => (
  <Box display='flex' alignItems='baseline'>
    {tags.map((tag) => (
      <CourseTag key={tag} tagName={tag} />
    ))}
    <Difficulty level={level} />
  </Box>
);

export default CourseHeader;
