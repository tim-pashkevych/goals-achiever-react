import heroTabletImg1x from '../../assets/images/home/hero-tablet@1x.png';
import heroTabletImg2x from '../../assets/images/home/hero-tablet@2x.png';
import heroTabletImgWebp1x from '../../assets/images/home/hero-tablet@1x.webp';
import heroTabletImgWebp2x from '../../assets/images/home/hero-tablet@2x.webp';
import heroImg1x from '../../assets/images/home/hero@1x.png';
import heroImg2x from '../../assets/images/home/hero@2x.png';
import heroImgWebp1x from '../../assets/images/home/hero@1x.webp';
import heroImgWebp2x from '../../assets/images/home/hero@2x.webp';

const images = [
  {
    key: 'hero',
    desktop: {
      x1: heroTabletImg1x,
      x2: heroTabletImg2x,
      webp_x1: heroTabletImgWebp1x,
      webp_x2: heroTabletImgWebp2x,
    },
    tablet: {
      x1: heroTabletImg1x,
      x2: heroTabletImg2x,
      webp_x1: heroTabletImgWebp1x,
      webp_x2: heroTabletImgWebp2x,
    },
    mobile: {
      x1: heroImg1x,
      x2: heroImg2x,
      webp_x1: heroImgWebp1x,
      webp_x2: heroImgWebp2x,
    },
  },
];

export default images;
