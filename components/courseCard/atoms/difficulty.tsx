import { Box } from '@chakra-ui/react';

export type Level = 'easy' | 'intermediate' | 'hard';

const levels: Record<Level, string> = {
  easy: 'beginners',
  intermediate: '',
  hard: '',
};

export interface DifficultyProps {
  level: Level;
}

const Difficulty = ({ level }: DifficultyProps) => (
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
