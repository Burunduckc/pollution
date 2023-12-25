import React from 'react'
import { RouteButtons } from '../UI/RouteButtons/RouteButtons'
import { Logo } from '../UI/Logo/Logo'
import './Header.scss'
export const Header = () => {
  return (
    <header className='header'>
        <Logo/>
        <RouteButtons/>
    </header>
  )
}
