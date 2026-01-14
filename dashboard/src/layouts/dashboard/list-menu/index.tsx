import type { ReactNode } from 'react'
import { NavLink } from 'react-router'
import { LayoutDashboard, ShoppingCart, ShoppingBag, Map, Users, Tags, Settings } from 'lucide-react'
import './style.scss'

type MenuLinkProps = {
  to: string
  children: ReactNode
}

const MenuLink = ({ to, children }: MenuLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        `menu__link ${isPending ? 'menu__link--pending' : isActive ? 'menu__link--active' : ''}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function ListMenu() {
  console.log('ListMenu rendered')
  return (
    <>
      <h3 className="menu-title">MARKETING</h3>
      <ul className="menu">
        <li className="menu__item">
          <MenuLink to='dashboard'>
            <LayoutDashboard size={20} />Dashboard
          </MenuLink>
        </li>
        <li className="menu__item">
          <MenuLink to='marketplace'>
            <ShoppingCart size={20} />Marketplace
          </MenuLink>
        </li>
        <li className="menu__item">
          <MenuLink to='orders'>
            <ShoppingBag size={20} />Orders
          </MenuLink>
        </li>
        <li className="menu__item">
          <MenuLink to='tracking'>
            <Map size={20} />Traking
          </MenuLink>
        </li>
        <li className="menu__item">
          <MenuLink to='customers'>
            <Users size={20} />Customers
          </MenuLink>
        </li>
        <li className="menu__item">
          <MenuLink to='discounts'>
            <Tags size={20} />Discounts
          </MenuLink>
        </li>
      </ul>
      <h3 className="menu-title">SYSTEM</h3>
      <ul className="menu">
        <li className="menu__item">
          <MenuLink to='settings'>
            <Settings size={20} />Settings
          </MenuLink>
        </li>
      </ul>
    </>
  )
}