import React from "react"
import TodoList from "./components/TodoList";

// For light/dark theme toggle: lets only use dark class, we can write light theme styles with element's other styles, and we can write dark styles separately in element.dark. We can add or remove the "dark" from element. 

export default function App() {
  const [theme, setTheme] = React.useState("dark")

  React.useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => {
      return prev==="dark" ? "" : "dark"
    })
    // console.log(theme)
  }
  
  return (
    <>
      <button className="theme-btn" onClick={toggleTheme}>
        Toggle theme
      </button>

      <TodoList theme={theme}/>
    </>
  )
}