import { Badge } from '@chakra-ui/react';

export type Tag = 'web' | 'js';

// TODO: type safety for value of `tagColorMapper`
export const tagColorMapper: Record<Tag, string> = {
  web: 'teal',
  js: 'purple',
};

export interface CourseTagProps {
  tagName: Tag;
}

const CourseTag = ({ tagName }: CourseTagProps) => (
  <Badge
    borderRadius='full'
    px='2'
    colorScheme={tagColorMapper[tagName]}
    mr={1}
  >
    {tagName}
  </Badge>
);

export default CourseTag;
