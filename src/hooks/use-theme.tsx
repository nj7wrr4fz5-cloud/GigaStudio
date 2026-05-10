"use client"

import * as React from "react"

export function useTheme() {
  const [theme, setTheme] = React.useState("light")

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  return { theme, setTheme }
}