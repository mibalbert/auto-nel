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
      ]
    },
    {
      title: "Jobs",
      data: [{
        title: "Jobs",
        href: "/user/jobs",
      },
      {
        title: "+Create Job",
        href: "/user/create-job"
      },
      ],
    },
    {
      title: "Cars",
      data: [{
        title: "Cars",
        href: "/user/cars",
      },
      {
        title: "+Add a new Car",
        href: "/user/add-new-car"
      },
      ],
    },
    {
      title: "Documents",
      data: [{
        title: "Quotes",
        href: "/user/quotes",
      },
      {
        title: "Invoices",
        href: "/user/invoices"
      },
      {
        title: "Payments",
        href: "/user/payments"
      }
      ]
    },
    {
      title: "Support",
      data: [{
        title: "Help Desk",
        href: "/user/help",
      },
      ]  // disabled: true,
    },
  ],
  adminTopNav: [
    {
      title: "Overview",
      href: "/admin/home",
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
      title: "Home",
      data: [{
        title: "Dashboard",
        href: "/admin/home",
      }],
    },
    {
      title: "Workload",
      data: [{
        title: "Create New Job",
        href: "/admin/create-job",
      },
      {
        title: "Jobs",
        href: "/admin/jobs"
      },
      {
        title: "Tasks",
        href: "/admin/tasks"
      },
      {
        title: "Parts",
        href: "/admin/parts"
      },
      {
        title: "Insurance Co.",
        href: "/admin/insurance-co"
      }
      ],
    },
    {
      title: "Clients",
      data: [
        {
          title: "+Create User",
          href: "/admin/create-user"
        },
        {
          title: "Clients",
          href: "/admin/clients",
        },
        {
          title: "Clients Cars",
          href: "/admin/clients-cars"
        }
      ],
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
      data: [
        {
          title: "S Cars",
          href: "/admin/showcase-cars",
        },
        {
          title: "+S Car",
          href: "/admin/create-showcase-car"
        },
        {
          title: "Services",
          href: "/admin/services"
        },
        {
          title: "+Service",
          href: "/admin/create-service"
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
