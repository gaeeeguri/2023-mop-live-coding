import {
  Box,
  Button,
  Container,
  Heading,
  ListItem,
  SimpleGrid,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import Section from '@/components/section';
import { SiCss3, SiHtml5, SiJavascript, SiReact } from 'react-icons/si';
import Topic from '@/components/topic';

const ReactCourse = () => {
  return (
    <Container maxW='container.md' mt={6}>
      <Section delay={0.1}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Counting Numbers: 숫자 세기
            </Heading>
          </Box>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box
          mt='1'
          mb={4}
          fontWeight='semibold'
          fontSize={20}
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          p={3}
        >
          대상
        </Box>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={4}
          mt={4}
          mb={6}
        >
          <Box mt={'1'}>
            <UnorderedList spacing={3}>
              <ListItem>HTML, CSS가 무엇인지 알고,</ListItem>
              <ListItem>JavaScript가 무엇인지 아는...</ListItem>
              <ListItem>MOP 부원!</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Box
          p={3}
          fontWeight='semibold'
          fontSize={20}
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          사용 기술
        </Box>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={4}
          mt={4}
          mb={6}
        >
          <Box
            md={3}
            display='flex'
            alignItems={{ base: '', md: 'center' }}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent='space-between'
            flexWrap='wrap'
          >
            <Box p={4} display='flex' alignItems='center'>
              <Box mr={2}>
                <SiJavascript size={25} />
              </Box>
              <Box>JavaScript</Box>
            </Box>
            <Box p={4} display='flex' alignItems='center'>
              <Box mr={2}>
                <SiHtml5 size={25} />
              </Box>
              HTML5
            </Box>
            <Box p={4} display='flex' alignItems='center'>
              <Box mr={2}>
                <SiCss3 size={25} />
              </Box>
              CSS3
            </Box>
            <Box p={4} display='flex' alignItems='center'>
              <Box mr={2}>
                <SiReact size={25} />
              </Box>
              React
            </Box>
          </Box>
        </Box>
      </Section>
      <Section delay={0.4}>
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
          내용: 여러 기술들을 이용해 숫자를 셉니다!
        </Box>
      </Section>

      <Section delay={0.4}>
        <SimpleGrid columns={2} spacing={{ base: 4, md: 6 }}>
          <Topic week={1} name='VanilaJS로 간단한 숫자 세기'>
            하나의 HTML파일에서 어떻게 CSS와 JavaScript는 사용하는지 확인합니다.
          </Topic>
          <Topic week={2} name='VanilaJS, React로 바꾸기'>
            VanilaJS의 장단점을 경험하고, 같은 기능을 React로 구현합니다.
          </Topic>
          <Topic week={3} name='React로 장바구니 만들기'>
            React를 이용해 조금 더 복잡한 어플리케이션을 구현합니다.
          </Topic>
          <Topic week={4} name='상태 관리'>
            React의 장단점을 경험하고, 이를 해결하기 위한 상태 관리 라이브러리를
            적용합니다.
          </Topic>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <Button
          colorScheme={useColorModeValue('orange', 'purple')}
          w='100%'
          mt={2}
          isDisabled={true}
        >
          신청하기
        </Button>
      </Section>
    </Container>
  );
};

export default ReactCourse;
