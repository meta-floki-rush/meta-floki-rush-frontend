import { useNotifications } from "reapop";
import { NotificationComponent } from "../components/Notification/Notification";
import notificationError from "../assets/images/notificationError.png";
import notificationSuccess from "../assets/images/notificationSuccess.png";

const useNotify = () => {
  const { notify, dismissNotifications } = useNotifications();

  const notifyError = (message: string) => {
    let chekMessage = message;
    let chekLength = chekMessage.length;
    notify({
      // @ts-ignore
      message: (
        <NotificationComponent
          title={"Error!"}
          message={chekLength <= 30 ? message : "Oops! Something went wrong."}
          image={notificationError}
        />
      ),
    });
  };

  const notifySuccess = (message: string) => {
    notify({
      // @ts-ignore
      message: <NotificationComponent title="Success!" message={message} image={notificationSuccess} />,
    });
  };

  return { notifyError, notifySuccess };
};

export default useNotify;
