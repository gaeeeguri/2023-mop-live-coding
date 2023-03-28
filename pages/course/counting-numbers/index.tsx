import { Button, Container, useColorModeValue } from '@chakra-ui/react';
import ListContent from '@/components/course/courseDetail/molecules/listContent';
import SubTitle from '@/components/course/courseDetail/atoms/subTitle';
import TechContent from '@/components/course/courseDetail/molecules/techContent';
import Title from '@/components/course/courseDetail/atoms/title';
import TopicContent, {
  Topic,
} from '@/components/course/courseDetail/molecules/topicContent';

// TODO: refactor variable names !!!!!!

const topics: Topic[] = [
  {
    topicTitle: 'VanilaJS로 간단한 숫자 세기',
    topicDescription:
      '하나의 HTML파일에서 어떻게 CSS와 JavaScript는 사용하는지 확인합니다.',
  },
  {
    topicTitle: 'VanilaJS, React로 바꾸기',
    topicDescription:
      'VanilaJS의 장단점을 경험하고, 같은 기능을 React로 구현합니다.',
  },
  {
    topicTitle: 'React로 장바구니 만들기',
    topicDescription:
      'React를 이용해 조금 더 복잡한 어플리케이션을 구현합니다.',
  },
  {
    topicTitle: '상태 관리',
    topicDescription:
      'React의 장단점을 경험하고, 이를 해결하기 위한 상태 관리 라이브러리를 적용합니다.',
  },
];

const ReactCourse = () => {
  return (
    <Container maxW='container.md' mt={6} mb={4}>
      <Title title='Counting Numbers: 숫자 세기' />

      <SubTitle name='대상' />
      <ListContent
        contents={[
          'HTML, CSS가 무엇인지 알고,',
          'JavaScript가 무엇인지 아는...',
          'MOP 부원!',
        ]}
      />

      <SubTitle name='사용 기술' />
      <TechContent names={['javascript', 'html', 'css', 'react']} />

      <SubTitle name='내용: 여러 기술들을 이용해 숫자를 셉니다!' />
      <TopicContent topics={topics} />

      <Button
        colorScheme={useColorModeValue('orange', 'purple')}
        w='100%'
        mt={2}
        isDisabled={true}
      >
        신청하기
      </Button>
    </Container>
  );
};

export default ReactCourse;
