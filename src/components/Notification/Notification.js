import React from "react";
import NotificationsSystem, { useNotifications, baseTheme, atalhoTheme } from "reapop";

export const Notification = () => {
  // console.log("ni",baseTheme)
  const customTheme = {
    ...baseTheme,
    ...atalhoTheme,

    notification: (notification) => ({
      // background: " #f9f6f6",
      // width: "300px",
      // border: "1px solid rgb(146, 38, 38)",
      // borderRadius: "16px",
    }),
    notificationDismissIcon: (notification) => ({}),
    // notificationTitle: (notification) => ({
    //   color: "black",
    // }),
  };

  // 1. Retrieve the notifications to display, and the function used to dismiss a notification.
  const { notifications, dismissNotification } = useNotifications();
  return (
    <div>
      <NotificationsSystem
        // 2. Pass the notifications you want Reapop to display.
        notifications={notifications}
        // 3. Pass the function used to dismiss a notification.
        dismissNotification={(id) => dismissNotification(id)}
        // 4. Pass a builtIn theme or a custom theme.
        theme={customTheme}
      />
    </div>
  );
};

// container: (position: Position, singleContainer: boolean) => CSSProperties;
//     notificationDismissIcon: (notification: Notification) => CSSProperties;
//     notification: (notification: Notification) => CSSProperties;
//     notificationIcon: (notification: Notification) => CSSProperties;
//     notificationImageContainer: (notification: Notification) => CSSProperties;
//     notificationImage: (notification: Notification) => CSSProperties;
//     notificationMeta: (notification: Notification) => CSSProperties;
//     notificationTitle: (notification: Notification) => CSSProperties;
//     notificationMessage: (notification: Notification) => CSSProperties;
//     notificationButtons: (notification: Notification) => CSSProperties;
//     notificationButton: (notification: Notification, position: number, state: NotificationButtonState) => CSSProperties;
//     notificationButtonText: (notification: Notification, position: number, state: NotificationButtonState) => CSSProperties;

export const NotificationComponent = ({ title, message, image }) => {
  // const classes = useStyles();

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          background: " #f9f6f6",
          maxWidth: "451px",
          border: "1px solid rgb(146, 38, 38)",
          borderRadius: "16px",
          color: " black",
          padding: "4px 14px",
        }}>
        <img
          src={image}
          style={{
            width: "50px",
            height: "50px",
            marginRight: "15px",
          }}
        />
        <div style={{ minWidth: "350px", maxWidth: "auto" }}>
          <h4>{title} </h4>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};
