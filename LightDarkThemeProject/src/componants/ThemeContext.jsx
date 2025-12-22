import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeContextYet = createContext()

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('Light')

  return (
    <div>
        <ThemeContextYet.Provider value={[theme, setTheme]}>
                 {props.children}
        </ThemeContextYet.Provider>
     
    </div>
  )
}

export default ThemeContext
