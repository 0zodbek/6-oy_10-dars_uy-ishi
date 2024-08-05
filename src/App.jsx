import { useState, createContext, useContext } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import { useTranslation } from "react-i18next";
export const ThemeContext = createContext();
function App() {
  let themee = localStorage.getItem("theme") || "light"
  let language = localStorage.getItem("language")
  // console.log(language);
  const { t, i18n } = useTranslation(language);
  const [theme, setTheme] = useState(themee);
  if (theme == "light") {
    document.querySelector("body").style.backgroundColor = "white";
  } else {
    document.querySelector("body").style.backgroundColor = "black";
  }
  return (
    <div className={`${styles.wrapper} ${styles[theme.theme]}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Hero />
        <Categories />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
