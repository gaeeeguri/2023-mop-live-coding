import { Box } from '@chakra-ui/react';

const Footer = () => (
  <Box alignItems='center' opacity={0.4} fontSize='sm'>
    &copy; {new Date().getFullYear()} Seongjin Park.
  </Box>
);

export default Footer;
