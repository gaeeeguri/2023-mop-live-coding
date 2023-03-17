import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const NotFound = () => {
  return (
    <Container mt={6}>
      <Heading as='h1'>Page Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align='center'>
        <Button
          as={NextLink}
          href='/'
          background={useColorModeValue('#ffffff40', '#20202380')}
        >
          Return to home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
