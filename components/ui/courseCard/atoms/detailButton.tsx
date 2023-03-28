import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

// TODO: type safety of link props
export interface DetailButtonProps {
  detailLink: string;
}

const DetailButton = ({ detailLink }: DetailButtonProps) => (
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
