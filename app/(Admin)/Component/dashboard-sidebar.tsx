"use client";
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  Briefcase,
  ChevronDown,
  Code,
  FileCode,
  LayoutDashboard,
  LifeBuoy,
  Mail,
  NotebookPen,
  Package,
  Settings,
  Users,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function DashboardSidebar() {
  const pathname = usePathname();
  const [projectsOpen, setProjectsOpen] = useState(false);

  // Check if any project route is active
  const isProjectActive = pathname.startsWith("/admin/projects");

  // Regular menu items
  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/user-dynamic",
      isActive: pathname === "/admin",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      href: "/admin/user-static",
      isActive: pathname === "/admin/Analytics",
    },
    {
      title: "Response",
      icon: Mail,
      href: "/admin/response",
      isActive: pathname === "/admin/response",
    },
    {
      title: "Blogs",
      icon: NotebookPen,
      href: "/admin/blogs",
      isActive: pathname === "/admin/blogs",
    },
    {
      title: "Users",
      icon: Users,
      href: "/admin/users",
      isActive: pathname === "/admin/users",
    },
  ];

  // Project sub-items
  const projectSubItems = [
    {
      title: "Web Development",
      icon: Code,
      href: "/admin/projects/web-development",
      isActive: pathname === "/admin/projects/web-development",
    },
    {
      title: "Mobile Projects",
      icon: FileCode,
      href: "/admin/projects/mobile",
      isActive: pathname === "/admin/projects/mobile",
    },
  ];

  // Settings menu items
  const settingsItems = [
    {
      title: "Settings",
      icon: Settings,
      href: "#",
      isActive: false,
    },
    {
      title: "Help",
      icon: LifeBuoy,
      href: "#",
      isActive: false,
    },
  ];

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package className="h-5 w-5 md:h-6 md:w-6" />
          <span className="text-sm md:text-base">Acme Inc</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Regular menu items */}
              {menuItems.slice(0, 4).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Collapsible Projects Menu */}
              <Collapsible
                open={projectsOpen}
                onOpenChange={setProjectsOpen}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      isActive={isProjectActive}
                      tooltip="Projects"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span>Projects</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {projectSubItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={subItem.isActive}
                          >
                            <Link href={subItem.href}>
                              <subItem.icon className="h-3.5 w-3.5 mr-1" />
                              {subItem.title}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Remaining regular menu items */}
              {menuItems.slice(4).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            A
          </div>
          {/* Add group-data-[collapsible=icon]:hidden to hide text in collapsed mode */}
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-medium">Admin User</span>
            <span className="text-xs text-muted-foreground">
              admin@example.com
            </span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
