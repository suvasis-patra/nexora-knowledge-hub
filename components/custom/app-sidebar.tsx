import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="border-r border-slate-200 bg-[#f7f8f8]"
    >
      <SidebarHeader>
        <div className="flex items-center gap-3 px-1">
          <Image src={"/nexora.svg"} height={30} width={30} alt="nexora" />
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold tracking-tighter text-lg text-black">
              Nexora
            </span>
            <span className="text-[10px] font-medium tracking-[0.21em] text-slate-500 uppercase">
              knowledge hub
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-1 px-2 pb-3 pt-5">
        <SidebarGroup className="space-y-1 px-0 py-0">
          <SidebarGroupLabel className="px-2 pb-2 pt-1 text-[11px] tracking-[0.18em] text-slate-500/80">
            workspace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAVIGATION_ITEMS.workspaceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      tooltip={item.label}
                      className={cn(
                        "h-11 rounded-lg px-2.5 text-[15px] text-slate-600 hover:bg-transparent hover:text-slate-900 data-[active=true]:bg-transparent",
                      )}
                      render={
                        <Link
                          href={item.href}
                          className="flex w-full items-center gap-3"
                        >
                          <span className="flex items-center gap-3">
                            <Icon className="h-4.5 w-4.5 stroke-[1.8]" />
                            <span>{item.label}</span>
                          </span>
                        </Link>
                      }
                    />
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="space-y-1 px-0 py-0">
          <SidebarGroupLabel className="px-2 pb-2 pt-3 text-[11px] tracking-[0.18em] text-slate-500/80">
            manage
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAVIGATION_ITEMS.manageItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      tooltip={item.label}
                      className="h-11 rounded-lg px-2.5 text-[15px] text-slate-600 hover:bg-transparent hover:text-slate-900 data-[active=true]:bg-transparent"
                      render={
                        <Link
                          href={item.href}
                          className="flex w-full items-center gap-3"
                        >
                          <Icon className="h-4.5 w-4.5 stroke-[1.8]" />
                          <span>{item.label}</span>
                        </Link>
                      }
                    />
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
