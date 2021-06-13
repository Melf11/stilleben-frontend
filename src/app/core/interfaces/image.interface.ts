
export interface ImageInterface {
  alternativeText: string;
  caption: string;
  created_at: string;
  ext: string;
  formats: {
    small: ImageInterface,
    medium: ImageInterface,
    large: ImageInterface,
    thumbnail: ImageInterface,
  };
  hash: string;
  height: number | string;
  id: number | string;
  mime: string;
  name: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  size: string | number;
  updated_at: string;
  url: string;
}
