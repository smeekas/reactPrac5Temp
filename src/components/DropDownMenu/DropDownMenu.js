import styles from "./DropDownMenu.module.css";
const DropDownMenu = ({ values, name }) => {
  return (
    <select className={styles.menu} name={name}>
      {values.map((valueName) => {
        return <option key={valueName} value={valueName}>{valueName}</option>;
      })}
      {/* <option value="owner">owner</option>
      <option value="manager">manager</option>
      <option value="read">read</option> */}
    </select>
  );
};
export default DropDownMenu;
