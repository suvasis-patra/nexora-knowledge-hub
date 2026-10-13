import { TCloudinarySignatureResponse } from "@/features/upload/utils/types";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
});

export async function GET(): Promise<Response> {
  const timestamp = Math.floor(Date.now() / 1000) - 50 * 60;

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: "nexora" },
    process.env.CLOUDINARY_API_SECRET!,
  );

  const response: TCloudinarySignatureResponse = {
    timestamp,
    signature,
    url: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/raw/upload`,
    apiKey: process.env.CLOUDINARY_API_KEY,
    folder: "nexora",
  };

  return NextResponse.json(response);
}
