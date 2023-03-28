import React from 'react';
import { Box } from '@chakra-ui/react';

export interface SubTitleProps {
  name: string;
}

// TODO: Title, SubTitle, Button 같이 course 이외에도 반복될 수 있는 컴포넌트 분리
const SubTitle = ({ name }: SubTitleProps) => (
  <Box
    p={3}
    fontWeight='semibold'
    fontSize={20}
    as='h3'
    lineHeight='tight'
    flexGrow={1}
    display='flex'
    mb={4}
  >
    {name}
  </Box>
);

export default SubTitle;
