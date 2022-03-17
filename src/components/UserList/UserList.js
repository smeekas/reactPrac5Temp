import styles from "./UserList.module.css";
import { useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem";
import UserDetail from "../UserDetail/UserDetail";
import { AnimatePresence } from "framer-motion";
const UserList = () => {
  const user = useSelector((state) => state.data);
  //   console.log(user);
  return (
    <div>
      <div className={styles.userList}>
        <div>
          <div className={styles.header}>
            <h2 className={styles.name}>Name</h2>
            <h2 className={styles.status}>Status</h2>
            <h2>Access</h2>
          </div>

          <AnimatePresence>
            {user.map((item) => {
              return <UserItem key={item.id} data={item} />;
            })}
          </AnimatePresence>
          <UserDetail/>
        </div>
      </div>
    </div>
  );
};
export default UserList;
