"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/doctor_dashboard/doctor-panel/user-nav";
import { SheetMenu } from "@/components/doctor_dashboard/doctor-panel/sheet-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex flex-col gap-2 py-3">
        {/* Top Row: Title & Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SheetMenu />
            <h1 className="font-bold text-lg">{title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserNav />
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        {pathSegments.length > 0 && (
          <Breadcrumb className="text-sm text-gray-500">
            <BreadcrumbList className="flex items-center gap-2">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              {pathSegments.map((segment, index) => {
                const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                return (
                  <div key={href} className="flex items-center gap-2">
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={href}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>
    </header>
  );
}
