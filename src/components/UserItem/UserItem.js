import styles from "./UserItem.module.css";
import { FiTrash2, FiLock } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
const UserItem = (props) => {
  const dispatch = useDispatch();
  //   console.log(props);
  const deleteHandler = () => {
    dispatch({ type: "delete", id: props.data.id });
  };
  const hoverHandler = () => {
    dispatch({ type: "userdetail", id: props.data.id });
  };
  const ID = props.data.id;
  return (
    <motion.div exit={{ x: -1000 }} className={styles.userItem}>
      <div onMouseEnter={hoverHandler} className={styles.avatar_name}>
        <img className={styles.avatar} src={props.data.avatar} />
        <section className={styles.name_email}>
          <div
            className={styles.name}
          >{`${props.data.first_name} ${props.data.last_name}`}</div>
          <div className={styles.email}>{props.data.email}</div>
        </section>
      </div>
      <div>
        {ID !== 1 ? (
          <DropDownMenu name="status" values={["inactive", "Active"]} />
        ) : (
         <p className={styles.active}>Active</p>
        )}
      </div>
      <div className={styles.access_icon}>
        <div>
          {ID !== 1 ? (
            <DropDownMenu name="access" values={["Manager", "Read"]} />
          ) : (
            <p>Owner</p>
          )}
        </div>

        {ID !== 1 ? (
          <div>
            <FiTrash2
              onClick={deleteHandler}
              className={`${styles.icon} ${styles.lock}`}
            />
          </div>
        ) : (
          <div>
            <FiLock className={styles.icon} />
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default UserItem;
