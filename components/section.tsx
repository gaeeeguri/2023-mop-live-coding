import { chakra, ResponsiveValue, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

export interface SectionProps {
  children: React.ReactNode;
  delay: ResponsiveValue<any>;
}

const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
