import { TCloudinarySignatureResponse } from "../../utils/types";

export async function getCloudinarySignature() {
  try {
    const response = await fetch("/api/sign-cloudinary-params", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    return data as TCloudinarySignatureResponse;
  } catch (error) {
    throw error;
  }
}
