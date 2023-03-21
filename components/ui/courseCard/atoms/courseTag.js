import { Badge } from '@chakra-ui/react';

const tagColor = {
  web: 'teal',
  js: 'purple',
};

const CourseTag = ({ children }) => (
  <Badge borderRadius='full' px='2' colorScheme={tagColor[children]} mr={1}>
    {children}
  </Badge>
);

export default CourseTag;
