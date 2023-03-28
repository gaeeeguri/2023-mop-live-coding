import React from 'react';
import { Box } from '@chakra-ui/react';
import TechIcon from './techIcon';

const techName = {
  react: 'React',
  javascript: 'JavaScript',
  html: 'HTML5',
  css: 'CSS3',
};

export type TechNames = 'react' | 'javascript' | 'html' | 'css';

export interface TechStackProps {
  name: TechNames;
}

// TODO: refactor for type safety
const TechStack = ({ name }: TechStackProps) => (
  <Box p={4} display='flex' alignItems='center'>
    <Box mr={2}>
      <TechIcon name={name} size={25} />
    </Box>
    <Box>{techName[name]}</Box>
  </Box>
);

export default TechStack;
