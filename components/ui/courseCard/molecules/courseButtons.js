import DetailButton from '@/components/ui/courseCard/atoms/detailButton';
import DashboardButton from '@/components/ui/courseCard/atoms/dashboardButton';
import { Box } from '@chakra-ui/react';

const CourseButtons = ({ detailLink, dashboardLink }) => (
  <Box display={'flex'} justifyContent={'flex-end'} mt={3}>
    <DetailButton detailLink={detailLink} />
    <DashboardButton dashboardLink={dashboardLink} />
  </Box>
);

export default CourseButtons;
