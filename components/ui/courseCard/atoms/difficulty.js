import { Box } from '@chakra-ui/react';

const levels = {
  easy: 'beginners',
};

const Difficulty = ({ level }) => (
  <Box
    color='gray.500'
    fontWeight='semibold'
    letterSpacing='wide'
    fontSize='xs'
    textTransform='uppercase'
    ml='2'
  >
    for {levels[level]}
  </Box>
);

export default Difficulty;
