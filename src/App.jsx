// import { useState, createContext, useContext } from 'react'
import styles from "./App.module.css"
import Header from "./components/Header"
import Hero from './components/Hero';
import Categories from './components/Categories';
// const userContext = useContext();
function App() {
// const [user, setUser] = useContext()
  return (
    <div className={styles.wrapper}>
    <Header />
    <Hero />
    <Categories />
  </div>
  )
}

export default App
