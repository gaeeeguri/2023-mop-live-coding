import { Box, useColorModeValue } from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';

const Course = ({ href, name }) => {
  return (
    <Box
      borderRadius='lg'
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={4}
      mt={4}
      mb={6}
      textAlign='center'
      display='flex'
    >
      <FaReact size={200} />
      {name}
    </Box>
  );
};

export default Course;
