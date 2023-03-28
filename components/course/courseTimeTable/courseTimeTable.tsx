import React from 'react';
import CourseTimeTableRow, {
  CourseTimeTableRowProps,
} from '@/components/course/courseTimeTable/molecules/couseTimeTableRow';
import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';

export interface CourseTimeTableProps {
  rows: CourseTimeTableRowProps[];
}

const CourseTimeTable = ({ rows }: CourseTimeTableProps) => (
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
        {rows.map((row) => (
          <CourseTimeTableRow
            key={row.date}
            date={row.date}
            topic={row.topic}
            codeLink={row.codeLink}
            slideLink={row.slideLink}
          />
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);

export default CourseTimeTable;
