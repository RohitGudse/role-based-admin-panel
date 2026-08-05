// Admin Permissions
const adminPermissions = [
  "dashboard",
  "users",
  "settings",
  "reports",
];

// Manager Permissions
const managerPermissions = [
  "dashboard",
  "reports",
];

// User Permissions
const userPermissions = [
  "dashboard",
];

// Export All Role Permissions
export const rolePermissions = {
  admin: adminPermissions,
  manager: managerPermissions,
  user: userPermissions,
};