import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Patient Dashboard",
      menus: [
        // {
        //   href: "/patient/dashboard/",
        //   label: "Patient Dashboard",
        //   icon: LayoutGrid,
        //   submenus: [],
        // },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        // {
        //   href: "",
        //   label: "Posts",
        //   icon: SquarePen,
        //   submenus: [
        //     {
        //       href: "/posts",
        //       label: "All Posts",
        //     },
        //     {
        //       href: "/posts/new",
        //       label: "New Post",
        //     },
        //   ],
        // },
        {
          href: "/patient/dashboard/my_reports",
          label: "My Reports",
          icon: Bookmark,
        },
        {
          href: "/patient/dashboard/view_doctors",
          label: "View Doctors",
          icon: Tag,
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        // {
        //   href: "/users",
        //   label: "Users",
        //   icon: Users,
        // },
        {
          href: "/account",
          label: "Account",
          icon: Settings,
        },
      ],
    },
  ];
}
