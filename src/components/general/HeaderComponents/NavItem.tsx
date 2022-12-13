import { NavLink } from 'react-router-dom'
import s from './NavItem.module.scss'
import { Ilinks } from '../../../type/linkNav'
import React from 'react'

const NavItem: React.FC<Ilinks> = ({val, path}) => {
  return (
    <div className={s.link}>
      <NavLink to={path} className={({isActive}) => isActive ? "text-red-400": ''}>
        {val}
      </NavLink>
    </div>
  )
}

export default NavItem