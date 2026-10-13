import {
  CircleQuestionMark,
  Gauge,
  LayoutDashboard,
  LibraryBig,
  Settings2,
} from "lucide-react";

export const WORKSPCE_ROUTES = {
  overview: "/workspace/overview",
  documents: "/workspace/documents",
  inngestionActivity: "/workspace/inngestion-activity",
} as const;

export const MANAGE_ROUTES = {
  settings: "/settings",
  help: "help",
} as const;

export type workspaceRoute =
  (typeof WORKSPCE_ROUTES)[keyof typeof WORKSPCE_ROUTES];

export type ManageRoute = (typeof MANAGE_ROUTES)[keyof typeof MANAGE_ROUTES];

export const WORKSPACE_ITEMS = [
  { label: "Overview", icon: LayoutDashboard, href: WORKSPCE_ROUTES.overview },
  {
    label: "Documents",
    icon: LibraryBig,
    href: WORKSPCE_ROUTES.documents,
    count: 5,
  },
  {
    label: "Ingestion activity",
    icon: Gauge,
    href: WORKSPCE_ROUTES.inngestionActivity,
    count: 3,
  },
] as const;
export const MANAGE_ITEMS = [
  { label: "Settings", icon: Settings2, href: MANAGE_ROUTES.settings },
  { label: "Help Center", icon: CircleQuestionMark, href: MANAGE_ROUTES.help },
] as const;

export const NAVIGATION_ITEMS = {
  workspaceItems: [...WORKSPACE_ITEMS],
  manageItems: [...MANAGE_ITEMS],
} as const;
