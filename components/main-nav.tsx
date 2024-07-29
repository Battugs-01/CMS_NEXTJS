"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      label: "Overview",
      href: `/${params.storeId}`,
      active: pathname === `/${params.storeId}`,
    },
    {
      label: "Settings",
      href: `/${params.storeId}/settings`,
      active: pathname === `/${params.storeId}/settings`,
    },
    // {
    //   name: "Products",
    //   href: "/[storeId]/products",
    //   isActive: pathname === "/[storeId]/products",
    // },
    // {
    //   name: "Orders",
    //   href: "/[storeId]/orders",
    //   isActive: pathname === "/[storeId]/orders",
    // },
    // {
    //   name: "Settings",
    //   href: "/[storeId]/settings",
    //   isActive: pathname === "/[storeId]/settings",
    // },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}