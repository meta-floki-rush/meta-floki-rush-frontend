import { setUpNotifications } from "reapop";

// run this function when your application starts before creating any notifications

export const notificationSetUp = () => {
  return setUpNotifications({
    defaultProps: {
      position: "top-right",
      dismissible: true,
      dismissAfter: 5000,
    },
  });
};
