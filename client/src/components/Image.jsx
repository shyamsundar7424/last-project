import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
  const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT; // Ensure this is set in .env

  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={src}
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }} // Corrected "lqip"
      width={w}
      height={h}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
    />
  );
};

export default Image;
