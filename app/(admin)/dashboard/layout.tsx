import DashboardShell from "@/components/custom/dashboard-shell";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return <DashboardShell>{children}</DashboardShell>;
};

export default DashboardLayout;
