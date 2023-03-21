import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

const DetailButton = ({ detailLink }) => (
  <Button
    mr={0}
    size={{ base: 'sm', md: 'md' }}
    as={NextLink}
    href={detailLink}
    ml={2}
    variant='ghost'
    fontWeight='600'
  >
    Detail
  </Button>
);

export default DetailButton;
