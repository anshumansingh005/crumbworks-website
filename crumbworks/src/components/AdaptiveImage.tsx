interface AdaptiveImageProps {
  mobile: string;
  desktop: string;
  alt: string;
  imageClass?: string;
  containerClass?: string;
}
const AdaptiveImage = ({
  mobile,
  desktop,
  alt,
  imageClass,
  containerClass,
}: AdaptiveImageProps) => {
  return (
    <picture className={containerClass}>
      <source media="(min-width:1024px)" src={desktop} />
      <img src={mobile} alt={alt} className={imageClass} />
    </picture>
  );
};

export default AdaptiveImage;
