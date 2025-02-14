import Image, { ImageProps } from 'next/image';

type ImgProps = {
  internalAsset?: boolean // default false
}

const Index = ({ internalAsset, ...props }: ImageProps & ImgProps) =>
  <Image
    {...props}
    src={internalAsset ? props.src : `${process.env.NEXT_PUBLIC_ASSET_DOMAIN}/${props.src}`
    }
  />

export default Index;
