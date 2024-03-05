import { useRef, useState } from "react";
import styles from "./Theme.module.scss";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
export default function Theme() {
  const [theme, setTheme] = useState(initialTheme());
  const lightModeRef = useRef(null);
  const darkModeRef = useRef(null);

  function initialTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  }

  function toggleTheme(e) {
    const body = document.querySelector("#body");
    //only run when theme is set to light and we are clicking dark btn
    if (theme === "light" && e.target === darkModeRef.current) {
      setTheme("dark");
      body.classList.add("dark");
      body.classList.remove("light");
      lightModeRef.current.classList.remove(styles["active"]);
      darkModeRef.current.classList.add(styles["active"]);
    }
    //only run when theme is set to dark and we are clicking light btn
    else if (theme === "dark" && e.target === lightModeRef.current) {
      setTheme("light");
      body.classList.remove("dark");
      body.classList.add("light");
      lightModeRef.current.classList.add(styles["active"]);
      darkModeRef.current.classList.remove(styles["active"]);
    }
  }

  return (
    <div className={styles.themeBtn}>
      <button
        ref={lightModeRef}
        onClick={(e) => toggleTheme(e)}
        className={`${styles.lightMode} ${initialTheme() === "light" ? styles.active : ""}`}
      >
        <LightModeRounded />
        <span>Light</span>
      </button>
      <button
        ref={darkModeRef}
        onClick={(e) => toggleTheme(e)}
        className={`${styles.darkMode} ${initialTheme() === "dark" ? styles.active : ""}`}
      >
        <DarkModeRounded />
        <span>Dark</span>
      </button>
    </div>
  );
}
