import React from 'react';
import { Td, Tr } from '@chakra-ui/react';
import MaterialBadge from '@/components/course/courseTimeTable/atoms/materialBadge';

type Month =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12';

type SingleNumber = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

// TODO: type safety for day (no more than 31 / prevent 02.30)
export type Date = `${Month}.${'0' | '1' | '2' | '3'}${SingleNumber}`;

export interface CourseTimeTableRowProps {
  date: Date;
  topic: string;
  codeLink: string;
  slideLink: string;
}

const CourseTimeTableRow = ({
  date,
  topic,
  slideLink,
  codeLink,
}: CourseTimeTableRowProps) => (
  <Tr>
    <Td>{date}</Td>
    <Td>{topic}</Td>
    <Td isNumeric>
      <MaterialBadge title='Codes' colorScheme='blue' goTo={codeLink} />
      <MaterialBadge title='Slides' colorScheme='purple' goTo={slideLink} />
    </Td>
  </Tr>
);

export default CourseTimeTableRow;
