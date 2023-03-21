import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import CourseTag from '@/components/ui/courseCard/atoms/courseTag';
import Difficulty from '@/components/ui/courseCard/atoms/difficulty';
import DashboardButton from '@/components/ui/courseCard/atoms/dashboardButton';
import DetailButton from '@/components/ui/courseCard/atoms/detailButton';
import CourseTitle from '@/components/ui/courseCard/atoms/courseTitle';
import CourseImage from '@/components/ui/courseCard/atoms/courseImage';

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
        <Box
          p='4'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          flexGrow={1}
        >
          <Box>
            <Box display='flex' alignItems='baseline'>
              <CourseTag>web</CourseTag>
              <CourseTag>js</CourseTag>
              <Difficulty level='easy' />
            </Box>
            <CourseTitle>{reactCourse.title}</CourseTitle>
          </Box>
          <Box display={'flex'} justifyContent={'flex-end'} mt={3}>
            <DetailButton detailLink='/course/counting-numbers' />
            <DashboardButton dashboardLink='/course/counting-numbers' />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
