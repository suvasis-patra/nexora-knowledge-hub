export type TCloudinarySignatureResponse = {
  timestamp: number;
  signature: string;
  url: string;
  apiKey: string | undefined;
  folder: string;
};
