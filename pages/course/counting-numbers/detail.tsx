import { Container } from '@chakra-ui/react';
import ListContent from '@/components/course/courseDetail/molecules/listContent';
import Title from '@/components/course/courseDetail/atoms/title';
import SubTitle from '@/components/course/courseDetail/atoms/subTitle';
import { CourseTimeTableRowProps } from '@/components/course/courseTimeTable/molecules/couseTimeTableRow';
import CourseTimeTable from '@/components/course/courseTimeTable/courseTimeTable';

const ReactCourseDetail = () => {
  const schedules: CourseTimeTableRowProps[] = [
    {
      date: '03.22',
      topic: 'Vanilla JS로 숫자 세기',
      codeLink: 'https://github.com/mop-gist/counting-numbers/tree/vanilaJS',
      slideLink:
        'https://docs.google.com/presentation/d/1btJaOyRV6ZIKi0sOMz9af4eeiBAJms_3UvtzJVDZPOo/edit?usp=sharing',
    },
    {
      date: '03.29',
      topic: 'React로 숫자 만들기',
      codeLink:
        'https://github.com/mop-gist/counting-numbers/tree/simple-react',
      slideLink:
        'https://docs.google.com/presentation/d/1Q4gkEWRYbhIebGjWEwsR_UmGCkqlnFttZ3_spd6iw-g/edit?usp=sharing',
    },
  ];

  return (
    <Container maxW='container.md' mt={6} mb={4}>
      <Title title='Counting Numbers: 숫자 세기' />

      <ListContent
        contents={[
          '매주 수요일 오후 10시',
          'MOP 디스코드 또는 유튜브',
          '30분 정도의 라이브코딩을 두 번 진행',
        ]}
      />

      <SubTitle name='일정' />
      <CourseTimeTable rows={schedules} />
    </Container>
  );
};

export default ReactCourseDetail;
