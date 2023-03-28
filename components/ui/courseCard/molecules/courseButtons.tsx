import DetailButton, {
  DetailButtonProps,
} from '@/components/ui/courseCard/atoms/detailButton';
import DashboardButton, {
  DashboardButtonProps,
} from '@/components/ui/courseCard/atoms/dashboardButton';
import { Box } from '@chakra-ui/react';

export interface CourseButtonsProps
  extends DetailButtonProps,
    DashboardButtonProps {}

const CourseButtons = ({ detailLink, dashboardLink }: CourseButtonsProps) => (
  <Box display={'flex'} justifyContent={'flex-end'} mt={3}>
    <DetailButton detailLink={detailLink} />
    <DashboardButton dashboardLink={dashboardLink} />
  </Box>
);

export default CourseButtons;
