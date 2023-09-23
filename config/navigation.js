/**
 * config/navigation.js
 */

// Define navigation configurations
const navigationConfig = {
  guestTopNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
  ],
  userTopNav: [
    {
      title: "Dashboard",
      href: "/user/dashboard",
    },
    {
      title: "Profile",
      href: "/user/profile",
    },
    {
      title: "Cart",
      href: "/cart",
    },
    {
      title: "Settings",
      href: "/user/settings",
    },
    {
      title: "Logout",
      href: "/user/logout",
    },
  ],
  userSideNav: [
    {
      title: "Home",
      data: [{
        title: "Dashboard",
        href: "/user/dashboard",
      },
      {
        title: "+Add a new Car",
        href: "/user/add-new-car"
      },
      {
        title: "View Current Jobs",
        href: "/user/view-current-jobs"
      }
      ],
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
      data: [{
        title: "Home",
        href: "/admin/home",
      }],
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
        title: "View Customers Cars",
        href: "/admin/view-customers-cars",
      },
      {
        title: "View Showcase Cars",
        href: "/admin/view-showcase-cars",
      },
      {
        title: "+ Create new Car",
        href: "/admin/create-new-car"
      },
      {
        title: "Create new Service",
        href: "/admin/create-new-service"
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
      return {
        topNav: navigationConfig.userTopNav,
        sideNav: navigationConfig.userSideNav,
      };
    case 'GUEST':
    default:
      return {
        topNav: navigationConfig.guestTopNav,
      };
  }
}
