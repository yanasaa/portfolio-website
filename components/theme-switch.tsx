'use client'
import { useThemeContext } from '@/context/theme-context';
import React, { useContext, useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useThemeContext()
   
  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 
    backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
    onClick={toggleTheme}
    >
        {
            theme === "light" ? <BsSun /> : <BsMoon />
        }
        
    </button>
  )
}
