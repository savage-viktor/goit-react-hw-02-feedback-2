import styles from "./Notification.module.css";

function Notification({ message }) {
  return <p className={styles.notificationMessage}>{message}</p>;
}

export default Notification;
