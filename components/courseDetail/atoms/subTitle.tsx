import React from 'react';
import { Box } from '@chakra-ui/react';

export interface SubTitleProps {
  name: string;
}

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
