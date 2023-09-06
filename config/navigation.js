/**
 * config/navigation.js
 */

export const navigationConfig = {
  guestTopNav: [
    {
      title: "guestNav",
      href: "/docs",
    },
    {
      title: "guestNav",
      href: "/docs",
    },
    {
      title: "guestNav",
      href: "/docs",
    },
    {
      title: "guestNav",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  guestSideNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  adminTopNav: [
    {
      title: "Overview",
      href: "/admin/home",
    },
    {
      title: "Kanban",
      href: "/admin/current-workload",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  adminSideNav: [

    {
      title: "Overview",
      href: "/admin/home"
    },
    {
      title: "Clients",

      data: [{
        title: "View All Clients",
        href: "/admin/view-all-clients",
      },
      {
        title: "Create new Guest User",
        href: "/admin/create-new-guest-user"
      }
      ],
    },
    {
      title: "Workload",
      data: [{
        title: "View All Jobs",
        href: "/admin/jobs",
      },
      {
        title: "Current Tasks",
        href: "/admin/current-tasks"
      },
      {
        title: "Expected Parts",
        href: "/admin/expected-parts"
      },
      {
        title: "Unpaid Parts",
        href: "/admin/unpaid-parts"
      },
      {
        title: "Insurance Co.",
        href: "/admin/insurance-companies"
      }
      ],
    },
    {
      title: "Register",
      href: "/docs",
    },
    // {
    //   title: "Posts",
    //   href: "/dashboard",
    //   icon: "post",
    // },
    // {
    //   title: "Billing",
    //   href: "/dashboard/billing",
    //   icon: "billing",
    // },
    // {
    //   title: "Settings",
    //   href: "/dashboard/settings",
    //   icon: "settings",
    // },
  ],
}