import React from 'react';
import {
  Box,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';

export interface ListContentProps {
  contents: string[];
}

const ListContent = ({ contents }: ListContentProps) => (
  <>
    <Box
      borderRadius='lg'
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={4}
      mb={4}
    >
      <Box mt={'1'}>
        <UnorderedList spacing={3}>
          {contents.map((content, idx) => (
            <ListItem key={idx}>{content}</ListItem> // change idx another value
          ))}
        </UnorderedList>
      </Box>
    </Box>
  </>
);

export default ListContent;
