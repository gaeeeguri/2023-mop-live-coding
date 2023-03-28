import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import TechStack, { TechNames } from '../atoms/techStack';

export interface TechContentProps {
  names: TechNames[];
}

// TODO: add UI logic for more than 4 tech stacks

const TechContent = ({ names }: TechContentProps) => (
  <Box
    borderRadius='lg'
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    p={4}
    mt={4}
    mb={4}
  >
    <Box
      display='flex'
      alignItems={{ base: '', md: 'center' }}
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent='space-between'
      flexWrap='wrap'
    >
      {names.map((stack) => (
        <TechStack key={stack} name={stack} />
      ))}
    </Box>
  </Box>
);

export default TechContent;
