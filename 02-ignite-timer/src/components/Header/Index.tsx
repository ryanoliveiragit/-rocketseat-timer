import { HeaderContainer } from './styles'
import logoignite from '../../assets/Logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoignite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
