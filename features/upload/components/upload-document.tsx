"use client";

import { ChangeEvent, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CloudUpload, FolderOpenDot } from "lucide-react";
import { DOCUMENT_UPLOAD_FEATURE } from "@/features/upload/utils/constants";
import { getCloudinarySignature } from "../server/cloudinary/cloudinary-signature";

const UploadDocumentComp = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileUpload = async (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    const result = await getCloudinarySignature();
    const { apiKey, folder, signature, timestamp, url } = result;
    if (!apiKey) {
      throw new Error("Cloudinary API key is not configured.");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp.toString());
    formData.append("signature", signature);
    formData.append("folder", folder);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
      credentials: "omit",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error?.message ?? `Upload failed with status ${response.status}`,
      );
    }

    console.log("Upload successful:", data);
  };

  return (
    <Card className="mt-8 max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2.5">
          <span className="h-13 w-13 rounded-2xl flex items-center justify-center bg-primary/20">
            <CloudUpload className="text-primary" />
          </span>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-xs text-primary font-semibold">
                NEW KNOWLEDGE SOURCE
              </p>
              <span className="text-xs text-muted-foreground">01</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Upload your documents</h3>
              <span className="text-muted-foreground text-sm max-w-20">
                Bring policies, playbooks, and product knowledge into Nexora.
                Files are staged for review before they enter the index.
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <label className="flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-primary/40 px-4 py-8 transition duration-200 hover:bg-primary/5 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary">
          <input
            type="file"
            accept=".pdf,.docx,.txt,.md,.markdown"
            className="sr-only"
            onChange={(e) => handleFileUpload(e)}
          />
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="w-13 h-13 my-3 rounded-full bg-primary flex items-center justify-center">
              <CloudUpload className="text-cyan-300" />
            </span>
            <div className="font-semibold">
              Drop your file here or{" "}
              <span className="text-cyan-300 underline">
                browse from your computer
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              PDF, DOCX, TXT, and Markdown files · up to 50 MB each
            </p>
            <span className={buttonVariants({ className: "mt-3" })}>
              <FolderOpenDot />
              Browse file
            </span>
            {selectedFile && (
              <p
                className="mt-2 text-xs text-muted-foreground"
                aria-live="polite"
              >
                Selected: {selectedFile.name}
              </p>
            )}
          </div>
        </label>
        <Separator className={"mt-8"} />
        <div className="flex items-center justify-between mt-5">
          {DOCUMENT_UPLOAD_FEATURE.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-2">
                <Icon className="text-primary" />
                <div>
                  <p className="text-xs font-semibold">{item.title}</p>
                  <span className="text-[10px]">{item.details}</span>
                </div>
              </div>
            );
          })}
        </div>
        <Separator className={"mt-5"} />
      </CardContent>
    </Card>
  );
};

export default UploadDocumentComp;
