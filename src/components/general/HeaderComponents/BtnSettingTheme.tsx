import { useAppDispatch } from '../../../hooks/appHooks'
import { settingThem } from '../../../store/themeSlice'
import s from './BtnSettingTheme.module.scss'

export default function BtnSettingTheme() {
  const dispatch = useAppDispatch()

  return (
    <button
      className={`${s.btn} beautifulRound`}
      onClick={() => dispatch(settingThem())}
    >
      Change Theme
    </button>
  )
}
