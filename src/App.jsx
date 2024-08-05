import { useState, createContext, useContext } from 'react'
import styles from "./App.module.css"
import Header from "./components/Header"
import Hero from './components/Hero';
import Categories from './components/Categories';
export const ThemeContext = createContext();
function App() {
const [theme, setTheme] = useState('light')
  return (
    <div className={styles.wrapper}>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Header />
    <Hero />
    <Categories />
    </ThemeContext.Provider>
  </div>
  )
}

export default App
