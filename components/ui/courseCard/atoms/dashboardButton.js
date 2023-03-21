import { Button, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

const DashboardButton = ({ dashboardLink }) => (
  <Button
    background={useColorModeValue('#f0e7db', '#202023')}
    mr={0}
    ml={2}
    size={{ base: 'sm', md: 'md' }}
    as={NextLink}
    textTransform='capitalize'
    href={dashboardLink}
  >
    dashboard
  </Button>
);

export default DashboardButton;
