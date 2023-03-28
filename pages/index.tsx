import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import CourseCard from '@/components/course/courseCard/courseCard';

const Home = () => (
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

    <CourseCard
      tags={['web', 'js']}
      level='easy'
      dashboardLink='/course/counting-numbers/detail'
      detailLink='/course/counting-numbers'
      imageSrc='reactjs.png'
      imageAlt='React Course Image'
      courseTitle='Counting Numbers: 숫자 세기'
    />
  </Container>
);

export default Home;
