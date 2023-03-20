import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import Section from '@/components/section';
import NextLink from 'next/link';

const Home = () => {
  const reactCourse = {
    image: '../public/reactjs.png',
    imageAlt: 'React Course Image',
    title: 'Counting Numbers: 숫자 세기',
  };

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

      <Section delay={0.2}>
        <Box
          maxW='container.md'
          // maxH={{ base: 'sm' }}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          display={{ base: 'block', sm: 'flex' }}
          background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          direction={{ base: 'row', sm: 'column' }}
        >
          <Image
            src='reactjs.png'
            alt={reactCourse.imageAlt}
            objectFit='cover'
            maxW={{ base: '100%', sm: '40%' }}
          />

          <Box
            p='4'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            flexGrow={1}
          >
            <Box>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal' mr={1}>
                  Web
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='purple'>
                  JS
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  for beginners
                </Box>
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {reactCourse.title}
              </Box>
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'}>
              <Button
                background={useColorModeValue('#f0e7db', '#202023')}
                mr={0}
                size='sm'
                as={NextLink}
                href='/course/counting-numbers'
              >
                Go to Course
              </Button>
            </Box>
          </Box>
        </Box>
      </Section>
    </Container>
  );
};

export default Home;
