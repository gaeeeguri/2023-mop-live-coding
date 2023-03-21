import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';

const ReactCourseDetail = () => {
  return (
    <Container maxW='container.md' mt={6} mb={4}>
      <Box display={{ md: 'flex' }} mb={4}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Counting Numbers: 숫자 세기
          </Heading>
        </Box>
      </Box>

      <Box
        borderRadius='lg'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={4}
        mt={6}
        mb={4}
      >
        <Box mt={'1'}>
          <UnorderedList spacing={3}>
            <ListItem>매주 수요일 오후 10시</ListItem>
            <ListItem>MOP 디스코드 또는 유튜브</ListItem>
            <ListItem>30분 정도의 라이브코딩을 두 번 진행</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Container>
  );
};

export default ReactCourseDetail;
