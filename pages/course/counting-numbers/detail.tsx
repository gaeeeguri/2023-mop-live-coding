import {
  Box,
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import MaterialBadge from '@/components/ui/courseTimeTable/atoms/materialBadge';
import ListContent from '@/components/ui/contents/molecules/listContent';

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

      <ListContent
        contents={[
          '매주 수요일 오후 10시',
          'MOP 디스코드 또는 유튜브',
          '30분 정도의 라이브코딩을 두 번 진행',
        ]}
      />

      <Box
        mt='1'
        mb={4}
        fontWeight='semibold'
        fontSize={20}
        as='h4'
        lineHeight='tight'
        noOfLines={1}
        p={3}
        flexGrow={1}
        display='flex'
      >
        일정
      </Box>

      <TableContainer>
        <Table
          variant='simple'
          size={{ base: 'md', md: 'lg' }}
          fontSize={{ base: '0.7em', sm: '0.8em', md: '1em' }}
          colorScheme={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Topic</Th>
              <Th isNumeric>materials</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>03.22</Td>
              <Td>Vanilla JS로 숫자 세기</Td>
              <Td isNumeric>
                <MaterialBadge
                  title='Codes'
                  colorScheme='blue'
                  goTo='https://github.com/mop-gist/counting-numbers/tree/vanilaJS'
                />
                <MaterialBadge
                  title='Slides'
                  colorScheme='purple'
                  goTo='https://docs.google.com/presentation/d/1btJaOyRV6ZIKi0sOMz9af4eeiBAJms_3UvtzJVDZPOo/edit?usp=sharing'
                />
              </Td>
            </Tr>
            <Tr>
              <Td>03.29</Td>
              <Td>React로 숫자 세기</Td>
              <Td isNumeric>
                <MaterialBadge
                  title='Codes'
                  colorScheme='blue'
                  goTo='https://github.com/mop-gist/counting-numbers/tree/simple-react'
                />
                <MaterialBadge
                  title='Slides'
                  colorScheme='purple'
                  goTo='https://docs.google.com/presentation/d/1Q4gkEWRYbhIebGjWEwsR_UmGCkqlnFttZ3_spd6iw-g/edit?usp=sharing'
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ReactCourseDetail;
