/**
 * config/navigation.js
 */

// Define navigation configurations
const navigationConfig = {
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
        title: "Create New Job",
        href: "/admin/create-job",
      },
      {
        title: "View All Jobs",
        href: "/admin/jobs"
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
      },
      {
        title: "Test",
        href: "/admin/test"
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
    {
      title: "Server",
      data: [{
        title: "View All Cars",
        href: "/admin/view-all-cars",
      },
      {
        title: "Create new Car",
        href: "/admin/create-new-car"
      }
      ],
    },
  ],
};

// Export navigation configuration based on the user's role
export function getNavigationConfig(userRole) {
  switch (userRole) {
    case 'ADMIN':
      return {
        topNav: navigationConfig.adminTopNav,
        sideNav: navigationConfig.adminSideNav,
      };
    case 'USER':
    default:
      return {
        topNav: navigationConfig.guestTopNav,
        sideNav: navigationConfig.guestSideNav,
      };
  }
}
