import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeContext, ThemeProvider } from './context/theme'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import ThemeButton from './components/ThemeButton'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme=()=>{
    setThemeMode("dark")
  }
  
  const lightTheme=()=>{
    setThemeMode("light")
  }

  //Change in theme

  useEffect(()=>{
        const themeWindow = document.querySelector('html')
        themeWindow.classList.remove("light","dark")

        themeWindow.classList.add(themeMode)

        
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className=" h-auto w-full overflow-hidden">
    <Header />
    
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
  </div>
  </ThemeProvider>
  )
}

export default App
