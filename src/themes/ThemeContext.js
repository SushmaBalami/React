import React from 'react'

export const themes={
    light:{
        background:'#ffff',
        color:'#000'
    },
    dark:{
        background:'#232f3e',
        color:'#ffff'
    }
}

export const ThemeContext=React.createContext(themes.light)