import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import Section from '@/components/section';
import { WorkGridItem } from '@/components/gridItem';

import thumNext from '../public/next.svg';

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius='lg'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mt={4}
        mb={6}
        textAlign='center'
      >
        Welcome to <b>MOP:DEV</b> courses!
      </Box>

      <Section delay={0.1}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Courses
            </Heading>
          </Box>
          <Box></Box>
        </Box>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Box
            borderRadius='lg'
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mt={4}
            mb={6}
            textAlign='center'
          >
            <WorkGridItem id='react' title='React' thumbnail={thumNext}>
              JS Component Library which is most popular in world.
            </WorkGridItem>
          </Box>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
