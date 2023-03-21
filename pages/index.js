import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import CourseImage from '@/components/ui/courseCard/atoms/courseImage';
import CourseBody from '@/components/ui/courseCard/organisms/courseBody';

const Home = () => {
  const reactCourse = {
    image: '../public/reactjs.png',
    imageAlt: 'React Course Image',
    title: 'Counting Numbers: 숫자 세기',
  };

  return (
    <Container mb={4}>
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

      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Courses
          </Heading>
        </Box>
        <Box></Box>
      </Box>

      <Box
        maxW='container.md'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        display={{ base: 'block', sm: 'flex' }}
        background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        direction={{ base: 'row', sm: 'column' }}
      >
        <CourseImage imageSrc='reactjs.png' imageAlt={reactCourse.imageAlt} />
        <CourseBody
          tags={['web', 'js']}
          level='easy'
          dashboardLink='/course/counting-numbers'
          detailLink='/course/counting-numbers'
        >
          {reactCourse.title}
        </CourseBody>
      </Box>
    </Container>
  );
};

export default Home;
