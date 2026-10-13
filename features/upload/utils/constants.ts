import { CircleCheck, Sparkles, TriangleAlert } from "lucide-react";

export const DOCUMENT_UPLOAD_FEATURE = [
  {
    title: "Private by default",
    details: "Only workspace members can access uploaded sources.",
    icon: CircleCheck,
  },
  {
    title: "Ready for enrichment",
    details: "Review chunks and metadata before publishing.",
    icon: Sparkles,
  },
  {
    title: "Supported formats",
    details: "PDF, DOCX, TXT, and MD files are accepted.",
    icon: TriangleAlert,
  },
];
