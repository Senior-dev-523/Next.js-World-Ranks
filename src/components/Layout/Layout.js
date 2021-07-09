import Head from "next/head";
import NextLink from "next/link";
import { Brightness6Rounded } from "@material-ui/icons";
import styles from "./Layout.module.css";
import { useEffect, useState } from "react";

const Layout = ({ children, title = "World Ranks" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <NextLink href="/">
          <span
            style={{
              fontSize: "20px",
              fontFamily: "Poppins",
              color: "#49c163",
            }}
          >
            World Ranks
          </span>
        </NextLink>
        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Ali Haider @ Senior Dev</footer>
    </div>
  );
};

export default Layout;
