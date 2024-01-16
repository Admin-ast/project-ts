import Image from "next/image";

interface imgProp {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  baseImageUrl?: string;
  isNextImg?: boolean;
  priority?: boolean;
  loading?: "lazy" | "eager" | undefined;
  quality?: any;
}

const myLoader: any = ({ src, width, quality }: imgProp) => {
  return `https://astroseva-talk.s3.amazonaws.com${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Img: React.FC<imgProp> = ({
  src,
  alt,
  className = "",
  isNextImg = true,
  loading = undefined,
  width,
  height,
  priority = false,
}) => {
  if (isNextImg) {
    return (
      <Image
        src={src}
        loader={myLoader}
        alt={alt}
        width={width}
        height={height}
        className={className}
        placeholder="blur"
        blurDataURL={src}
        priority={priority}
        loading={loading}
      />
    );
  }
  return (
    <>
      <img src={src} alt={alt} className={`${className}`} />
    </>
  );
};

export default Img;
