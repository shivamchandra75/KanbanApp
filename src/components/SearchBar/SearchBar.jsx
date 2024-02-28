import { Search } from "react-feather";
import styles from "./SearchBar.module.scss";
export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <Search className={styles.searchBar__icon} />
      <form action="">
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchBar__input}
        />
      </form>
    </div>
  );
}
