import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export interface TopicProps {
  index: number;
  name: string;
  description: string;
}

const TopicCard = ({ index, name, description }: TopicProps) => {
  return (
    <Box
      borderRadius='lg'
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={4}
    >
      <Box fontWeight='bold' fontSize={{ base: 'sm', md: 'lg' }}>
        {index}. {name}
      </Box>
      <Box fontSize={{ base: 'xs', md: 'sm' }}>{description}</Box>
    </Box>
  );
};

export default TopicCard;
