import BtnSettingTheme from './BtnSettingTheme'
import s from './Header.module.scss'
import Nav from './Nav'

export default function Header() {
  return (
    <header className={`${s.header} dark:bg-blue-900 duration-300`}>
      <BtnSettingTheme />
      <Nav />
    </header>
  )
}
