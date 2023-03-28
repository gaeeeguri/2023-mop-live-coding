import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import TopicCard from '@/components/course/courseDetail/atoms/topicCard';

export type Topic = {
  topicTitle: string;
  topicDescription: string;
};

export interface TopicContentProps {
  topics: Topic[];
}

const TopicContent = ({ topics }: TopicContentProps) => (
  <SimpleGrid columns={2} spacing={{ base: 4, md: 6 }} mb={4}>
    {topics.map((topic, index) => (
      <TopicCard
        index={index + 1}
        key={topic.topicTitle}
        name={topic.topicTitle}
        description={topic.topicDescription}
      />
    ))}
  </SimpleGrid>
);

export default TopicContent;
