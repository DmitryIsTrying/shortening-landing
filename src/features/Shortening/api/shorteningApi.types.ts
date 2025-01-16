export interface BaseResponse {
  data: Data;
}

interface Data {
  id: string;
  route: string;
  destination: string;
  title: null;
  description: null;
  image: null;
  favicon: null;
  consent: boolean;
  clicks: number;
  createdAt: string;
  updatedAt: string;
}

export interface Urls {
  shortedUrl: string;
  originalUrl: string;
}
