// dashboardData.js

export const dashboardData = {
  summary: {
    totalUsers: {
      label: "Total Users",
      value: 1250,
      change: 12.5,
      trend: "up",
    },

    totalRevenue: {
      label: "Total Revenue",
      value: 52000,
      currency: "USD",
      change: 8.2,
      trend: "up",
    },

    totalOrders: {
      label: "Total Orders",
      value: 845,
      change: 5.7,
      trend: "up",
    },

    totalProducts: {
      label: "Total Products",
      value: 320,
      change: 3.4,
      trend: "up",
    },
  },

  recentActivity: [
    {
      id: 1,
      title: "New user registered",
      description: "John Doe created a new account.",
      time: "5 minutes ago",
      type: "user",
    },
    {
      id: 2,
      title: "New order received",
      description: "Order #ORD-1025 was successfully placed.",
      time: "15 minutes ago",
      type: "order",
    },
    {
      id: 3,
      title: "Product added",
      description: "Wireless Headphones were added to inventory.",
      time: "1 hour ago",
      type: "product",
    },
  ],

  sales: {
    today: 4200,
    thisWeek: 18750,
    thisMonth: 52000,
    lastMonth: 47500,
  },
};

export default dashboardData;