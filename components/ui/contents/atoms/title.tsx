import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => (
  <Box display={{ md: 'flex' }} mb={4}>
    <Box flexGrow={1}>
      <Heading as='h2' variant='page-title'>
        {title}
      </Heading>
    </Box>
  </Box>
);

export default Title;
