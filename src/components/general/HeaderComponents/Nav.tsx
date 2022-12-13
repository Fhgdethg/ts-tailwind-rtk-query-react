import NavItem from './NavItem'
import { links } from '../../../data/navigation'
import s from './Nav.module.scss'
import { Ilinks } from '../../../type/linkNav'

export default function Nav() {
  return (
    <nav className={`${s.nav} beautifulRound`}>
      <ul className={s.links}>
        {
          links.map((item: Ilinks) => <NavItem {...item} key={item.val}/>)
        }
      </ul>
    </nav>
  )
}
