import { Badge } from '@chakra-ui/react';
import React from 'react';

import nextLink from 'next/link';

export interface MaterialBadgeProps {
  title: string;
  colorScheme: string;
  goTo: string;
}

const MaterialBadge = ({ title, colorScheme, goTo }: MaterialBadgeProps) => (
  <Badge
    colorScheme={colorScheme}
    fontSize={{ base: '0.8em', md: '1em' }}
    ml={2}
    size='sm'
    as={nextLink}
    href={goTo}
    target='_blank'
  >
    {title}
  </Badge>
);

export default MaterialBadge;
