import {
  images,
  boardBackgoundImgs,
  boardImgIcons,
} from '../../constants/images/';

export const Image = ({
  desktop,
  tablet,
  mobile,
  alt,
  pathKey,
  type,
  imageCategory = 'images',
}) => {
  const { width: desktopWidth, height: desktopHeight } = desktop;
  const { width: tabletWidth, height: tabletHeight } = tablet;
  const { width: mobileWidth, height: mobileHeight } = mobile;

  let image = images.find((img) => img.key === pathKey);

  if (imageCategory === 'images') {
    image = images.find((img) => img.key === pathKey);
  } else if (imageCategory === 'boardBackgroundImages') {
    image = boardBackgoundImgs.find((img) => img.key === pathKey);
  } else if (imageCategory === 'boardIcons') {
    image = boardImgIcons.find((img) => img.key === pathKey);
  }

  if (!image) return null;

  return (
    <picture>
      <source
        media="(min-width: 1280px)"
        srcSet={`${image.desktop.webp_x1} 1x, ${image.desktop.webp_x2} 2x`}
        type="image/webp"
        width={desktopWidth}
        height={desktopHeight}
      />
      <source
        media="(min-width: 1280px)"
        srcSet={`${image.desktop.x1} 1x, ${image.desktop.x2} 2x`}
        type={type}
        width={desktopWidth}
        height={desktopHeight}
      />

      <source
        media="(min-width: 768px)"
        srcSet={`${image.tablet.webp_x1} 1x, ${image.tablet.webp_x2} 2x`}
        type="image/webp"
        width={tabletWidth}
        height={tabletHeight}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${image.tablet.x1} 1x, ${image.tablet.x2} 2x`}
        type={type}
        width={tabletWidth}
        height={tabletHeight}
      />

      <source
        srcSet={`${image.mobile.webp_x1} 1x, ${image.mobile.webp_x2} 2x`}
        type="image/webp"
        width={mobileWidth}
        height={mobileHeight}
      />
      <img
        srcSet={`${image.mobile.x1} 1x,, ${image.mobile.x2} 2x`}
        src={`${image.mobile.x1}`}
        alt={alt}
        width={mobileWidth}
        height={mobileHeight}
      />
    </picture>
  );
};
