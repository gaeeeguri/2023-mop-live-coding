import logo from '../../public/mop-logo.png';
import Image from 'next/image';

const mopLogo = () => (
  <Image
    width={20}
    height={20}
    className='w-5 inline-block transition-transform group-hover:rotate-[20deg'
    alt='logo'
    src={logo}
  />
);
export default mopLogo;
