import { Box, useColorModeValue } from '@chakra-ui/react';

const Topic = ({ week, name, children }) => {
  return (
    <Box
      borderRadius='lg'
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={4}
    >
      <Box fontWeight='bold' p={2}>
        {week}. {name}
      </Box>
      <Box pl={3}>{children}</Box>
    </Box>
  );
};

export default Topic;
